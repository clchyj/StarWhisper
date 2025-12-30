import OpenAI from 'openai'
import type { LlmConfig, ChatMessage } from '../types'
import { LLM_PROVIDERS, TAROT_SYSTEM_PROMPT } from '../constants'

class LlmService {
  private openai: OpenAI | null = null
  private currentConfig: string = ''

  /**
   * 初始化LLM客户端
   */
  private initClient(config: LlmConfig): void {
    const configKey = `${config.baseURL}_${config.apiKey}`
    if (this.currentConfig === configKey && this.openai) {
      return
    }

    const baseURL = config.baseURL || this.getProviderBaseURL(config.provider)

    this.openai = new OpenAI({
      apiKey: config.apiKey,
      dangerouslyAllowBrowser: true,
      baseURL
    })

    this.currentConfig = configKey
  }

  /**
   * 获取供应商的BaseURL
   */
  private getProviderBaseURL(providerId: string): string {
    const provider = LLM_PROVIDERS.find(p => p.id === providerId)
    return provider?.baseURL || ''
  }

  /**
   * 测试LLM连接
   */
  async testConnection(config: LlmConfig): Promise<{ success: boolean; message: string }> {
    try {
      this.initClient(config)

      if (!this.openai) {
        return { success: false, message: 'LLM客户端初始化失败' }
      }

      const completion = await this.openai.chat.completions.create({
        messages: [{ role: 'user', content: '你好，请用一句话回复' }],
        model: config.model,
        max_tokens: 50
      })

      const response = completion.choices[0]?.message?.content
      if (response) {
        return { success: true, message: `连接成功！模型回复: ${response}` }
      }

      return { success: false, message: '未收到模型回复' }
    } catch (error: any) {
      console.error('LLM连接测试失败:', error)
      return { success: false, message: `连接失败: ${error.message || '未知错误'}` }
    }
  }

  /**
   * 发送塔罗解读请求
   */
  async sendTarotReading(config: LlmConfig, prompt: string): Promise<string | null> {
    this.initClient(config)

    if (!this.openai) {
      throw new Error('LLM客户端未初始化')
    }

    const messages: ChatMessage[] = [
      { role: 'system', content: TAROT_SYSTEM_PROMPT },
      { role: 'user', content: prompt }
    ]

    try {
      console.log('发送塔罗解读请求:', { model: config.model })

      const completion = await this.openai.chat.completions.create({
        messages,
        model: config.model
      })

      const response = completion.choices[0]?.message?.content
      console.log('LLM响应:', response)

      return response || null
    } catch (error) {
      console.error('LLM请求失败:', error)
      throw error
    }
  }

  /**
   * 流式发送塔罗解读请求
   */
  async sendTarotReadingStream(config: LlmConfig, prompt: string): Promise<AsyncIterable<string>> {
    this.initClient(config)

    if (!this.openai) {
      throw new Error('LLM客户端未初始化')
    }

    const messages: ChatMessage[] = [
      { role: 'system', content: TAROT_SYSTEM_PROMPT },
      { role: 'user', content: prompt }
    ]

    const stream = await this.openai.chat.completions.create({
      messages,
      model: config.model,
      stream: true
    })

    return (async function* () {
      for await (const part of stream) {
        const content = part.choices[0]?.delta?.content
        if (content) {
          yield content
        }
      }
    })()
  }
}

export const llmService = new LlmService()
