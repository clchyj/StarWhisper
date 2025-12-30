import { reactive, ref } from 'vue'
import type { AppState, DrawnCard, LlmConfig } from '../types'
import { LLM_PROVIDERS, APP_CONFIG, generateReadingPrompt, formatCardsInfo } from '../constants'
import { validateConfig, delay, generateSSML, splitSentence, storage, STORAGE_KEYS } from '../utils'
import { avatarService } from '../services/avatar'
import { llmService } from '../services/llm'
import { tarotService } from '../services/tarot'

// 从本地存储恢复配置
const savedAvatar = storage.get(STORAGE_KEYS.AVATAR_CONFIG, { appId: '', appSecret: '' })
const savedLlm = storage.get(STORAGE_KEYS.LLM_CONFIG, {
  provider: 'siliconflow',
  model: LLM_PROVIDERS[0].defaultModel,
  apiKey: '',
  baseURL: LLM_PROVIDERS[0].baseURL
})
const savedAsr = storage.get(STORAGE_KEYS.ASR_CONFIG, {
  provider: 'tx',
  appId: '',
  secretId: '',
  secretKey: ''
})

// 应用状态
export const appState = reactive<AppState>({
  avatar: {
    appId: savedAvatar.appId,
    appSecret: savedAvatar.appSecret,
    connected: false,
    instance: null
  },
  asr: {
    provider: savedAsr.provider,
    appId: savedAsr.appId,
    secretId: savedAsr.secretId,
    secretKey: savedAsr.secretKey,
    isListening: false
  },
  llm: {
    provider: savedLlm.provider,
    model: savedLlm.model,
    apiKey: savedLlm.apiKey,
    baseURL: savedLlm.baseURL
  },
  tarot: {
    currentSpread: 'single',
    drawnCards: [],
    question: '',
    reading: '',
    isReading: false
  },
  ui: {
    text: '',
    subTitleText: '',
    configPanelVisible: true,
    activeConfigTab: 'llm'
  }
})

// 虚拟人状态
export const avatarState = ref('')

// 保存配置到本地存储
export function saveConfigs(): void {
  storage.set(STORAGE_KEYS.AVATAR_CONFIG, {
    appId: appState.avatar.appId,
    appSecret: appState.avatar.appSecret
  })
  storage.set(STORAGE_KEYS.LLM_CONFIG, {
    provider: appState.llm.provider,
    model: appState.llm.model,
    apiKey: appState.llm.apiKey,
    baseURL: appState.llm.baseURL
  })
  storage.set(STORAGE_KEYS.ASR_CONFIG, {
    provider: appState.asr.provider,
    appId: appState.asr.appId,
    secretId: appState.asr.secretId,
    secretKey: appState.asr.secretKey
  })
}

// Store类 - 业务逻辑处理
export class AppStore {
  /**
   * 连接虚拟人
   */
  async connectAvatar(): Promise<void> {
    const { appId, appSecret } = appState.avatar

    if (!validateConfig({ appId, appSecret }, ['appId', 'appSecret'])) {
      throw new Error('请填写数字人 APP ID 和 APP Secret')
    }

    try {
      const avatar = await avatarService.connect({
        appId,
        appSecret
      }, {
        onSubtitleOn: (text: string) => {
          appState.ui.subTitleText = text
        },
        onSubtitleOff: () => {
          appState.ui.subTitleText = ''
        },
        onStateChange: (state: string) => {
          avatarState.value = state
        }
      })

      appState.avatar.instance = avatar
      appState.avatar.connected = true
      saveConfigs()
    } catch (error) {
      appState.avatar.connected = false
      throw error
    }
  }

  /**
   * 断开虚拟人连接
   */
  disconnectAvatar(): void {
    if (appState.avatar.instance) {
      avatarService.disconnect(appState.avatar.instance)
      appState.avatar.instance = null
      appState.avatar.connected = false
      avatarState.value = ''
    }
  }

  /**
   * 测试LLM连接
   */
  async testLlmConnection(): Promise<{ success: boolean; message: string }> {
    const config = this.getLlmConfig()
    if (!config.apiKey) {
      return { success: false, message: '请填写 API Key' }
    }
    saveConfigs()
    return await llmService.testConnection(config)
  }

  /**
   * 获取LLM配置
   */
  private getLlmConfig(): LlmConfig {
    return {
      provider: appState.llm.provider,
      model: appState.llm.model,
      apiKey: appState.llm.apiKey,
      baseURL: appState.llm.baseURL
    }
  }

  /**
   * 抽牌
   */
  drawCards(): DrawnCard[] {
    const cards = tarotService.drawBySpread(appState.tarot.currentSpread)
    appState.tarot.drawnCards = cards
    return cards
  }

  /**
   * 进行塔罗解读
   */
  async divine(): Promise<string | null> {
    const { drawnCards, question } = appState.tarot
    const config = this.getLlmConfig()

    if (!validateConfig(config, ['apiKey'])) {
      throw new Error('请先配置 LLM API Key')
    }

    if (!drawnCards.length) {
      throw new Error('请先抽取塔罗牌')
    }

    appState.tarot.isReading = true
    appState.tarot.reading = ''

    try {
      const cardsInfo = formatCardsInfo(drawnCards)
      const prompt = generateReadingPrompt(question || '请为我解读这张牌', cardsInfo)

      // 如果数字人已连接，使用流式输出并让数字人播报
      if (appState.avatar.connected && appState.avatar.instance) {
        const stream = await llmService.sendTarotReadingStream(config, prompt)
        await this.streamToAvatar(stream)
      } else {
        // 否则直接获取完整响应
        const reading = await llmService.sendTarotReading(config, prompt)
        appState.tarot.reading = reading || ''
      }

      return appState.tarot.reading
    } catch (error) {
      console.error('塔罗解读失败:', error)
      throw error
    } finally {
      appState.tarot.isReading = false
    }
  }

  /**
   * 流式输出到数字人
   */
  private async streamToAvatar(stream: AsyncIterable<string>): Promise<void> {
    const { avatar } = appState

    // 等待虚拟人准备就绪
    if (avatarState.value === 'speak') {
      avatar.instance.think()
      await delay(APP_CONFIG.SPEAK_INTERRUPT_DELAY)
    }

    let buffer = ''
    let isFirstChunk = true
    let fullText = ''

    for await (const chunk of stream) {
      buffer += chunk
      fullText += chunk
      const arr = splitSentence(buffer)

      if (arr.length > 1) {
        const ssml = generateSSML(arr[0] || '')
        if (isFirstChunk) {
          avatar.instance.speak(ssml, true, false)
          isFirstChunk = false
        } else {
          avatar.instance.speak(ssml, false, false)
        }

        buffer = arr[1] || ''
      }
    }

    // 处理剩余的字符
    if (buffer.length > 0) {
      const ssml = generateSSML(buffer)

      if (isFirstChunk) {
        avatar.instance.speak(ssml, true, false)
      } else {
        avatar.instance.speak(ssml, false, false)
      }
    }

    // 最后一句话
    const finalSsml = generateSSML('')
    avatar.instance.speak(finalSsml, false, true)

    appState.tarot.reading = fullText
  }

  /**
   * 开始语音输入
   */
  startVoiceInput(callbacks: {
    onFinished: (text: string) => void
    onError: (error: any) => void
  }): void {
    appState.asr.isListening = true
  }

  /**
   * 停止语音输入
   */
  stopVoiceInput(): void {
    appState.asr.isListening = false
  }

  /**
   * 重置塔罗状态
   */
  resetTarot(): void {
    appState.tarot.drawnCards = []
    appState.tarot.reading = ''
    appState.tarot.question = ''
  }
}

// 导出单例
export const appStore = new AppStore()
