// 塔罗牌类型定义
export interface TarotCard {
  id: string
  nameEn: string
  nameCn: string
  type: 'major' | 'minor'
  suit?: 'wands' | 'cups' | 'swords' | 'pentacles'
  meaningUp: string
  meaningRev: string
  imageUrl: string
}

// 抽取的牌
export interface DrawnCard {
  card: TarotCard
  position: 'upright' | 'reversed'  // 正位或逆位
  positionName?: string  // 在牌阵中的位置名称
}

// 牌阵类型
export interface SpreadType {
  id: string
  name: string
  description: string
  cardCount: number
  positions: string[]  // 每个位置的含义
}

// 虚拟人相关类型定义
export interface AvatarConfig {
  appId: string
  appSecret: string
}

export interface AvatarState {
  connected: boolean
  speaking: boolean
  thinking: boolean
}

// ASR相关类型定义
export interface AsrConfig {
  provider: 'tx'
  appId: string | number
  secretId: string
  secretKey: string
  vadSilenceTime?: number
}

export interface AsrCallbacks {
  onFinished: (text: string) => void
  onError: (error: any) => void
}

// LLM相关类型定义
export interface LlmProvider {
  id: string
  name: string
  baseURL: string
  models: string[]
  defaultModel: string
}

export interface LlmConfig {
  provider: string
  model: string
  apiKey: string
  baseURL?: string
}

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant'
  content: string
}

// Store类型定义
export interface AppStore {
  connectAvatar(): Promise<void>
  disconnectAvatar(): void
  sendMessage(text: string): Promise<string | undefined>
  startVoiceInput(callbacks: AsrCallbacks): void
  stopVoiceInput(): void
  drawCards(spreadType: string): DrawnCard[]
  divine(question: string, cards: DrawnCard[]): Promise<string | null>
}

// Store状态类型定义
export interface AppState {
  // 虚拟人配置
  avatar: {
    appId: string
    appSecret: string
    connected: boolean
    instance: any
  }

  // ASR配置
  asr: {
    provider: string
    appId: string | number
    secretId: string
    secretKey: string
    isListening: boolean
  }

  // LLM配置
  llm: {
    provider: string
    model: string
    apiKey: string
    baseURL: string
  }

  // 塔罗状态
  tarot: {
    currentSpread: string
    drawnCards: DrawnCard[]
    question: string
    reading: string
    isReading: boolean
  }

  // UI状态
  ui: {
    text: string
    subTitleText: string
    configPanelVisible: boolean
    activeConfigTab: string
  }
}

// SDK事件类型定义
export interface SdkEvent {
  type: 'subtitle_on' | 'subtitle_off' | string
  text?: string
  [key: string]: any
}

// 全局窗口类型扩展
declare global {
  interface Window {
    XmovAvatar: any
    CryptoJSTest: any
    CryptoJS: any
    WebAudioSpeechRecognizer: any
  }
}
