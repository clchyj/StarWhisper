import { APP_CONFIG } from '../constants'

/**
 * 生成随机容器ID
 */
export function generateContainerId(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(8))
  let randomID = ''
  for (let i = 0; i < bytes.length; i++) {
    randomID += bytes[i].toString(16).padStart(2, '0')
  }
  return `${APP_CONFIG.CONTAINER_PREFIX}${randomID}`
}

/**
 * 延迟函数
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * 检查Promise状态
 */
export async function getPromiseState(promise: Promise<any>): Promise<'pending' | 'fulfilled' | 'rejected'> {
  const t = {}
  return await Promise.race([promise, t]).then(
    (v: any) => (v === t ? 'pending' : 'fulfilled'),
    () => 'rejected'
  )
}

/**
 * 生成SSML格式的语音文本
 */
export function generateSSML(text: string, options: {
  pitch?: number
  speed?: number
  volume?: number
} = {}): string {
  const { pitch = 1, speed = 1, volume = 1 } = options
  return `<speak pitch="${pitch}" speed="${speed}" volume="${volume}">${text}</speak>`
}

/**
 * 安全的JSON解析
 */
export function safeJsonParse<T>(json: string, defaultValue: T): T {
  try {
    return JSON.parse(json)
  } catch {
    return defaultValue
  }
}

/**
 * 验证配置是否完整
 */
export function validateConfig(config: Record<string, any>, requiredFields: string[]): boolean {
  return requiredFields.every(field => config[field] && config[field] !== '')
}

/**
 * 将文本切分为适合TTS的片段
 */
const MIN_SPLIT_LENGTH = 2
const MAX_SPLIT_LENGTH = 20

export function splitSentence(text: string): string[] {
  if (!text) return []

  const chinesePunctuations = new Set(['、', '，', '：', '；', '。', '？', '！', '…', '\n'])
  const englishPunctuations = new Set([',', ':', ';', '.', '?', '!'])

  let count = 0
  let firstValidPunctAfterMin = -1
  let forceBreakIndex = -1
  let i = 0
  const n = text.length

  while (i < n && count < MAX_SPLIT_LENGTH) {
    const char = text[i]

    if (char >= '\u4e00' && char <= '\u9fff') {
      count++
      if (count === MAX_SPLIT_LENGTH) {
        forceBreakIndex = i + 1
      }
      i++
    } else if (char >= '0' && char <= '9') {
      count++
      if (count === MAX_SPLIT_LENGTH) {
        forceBreakIndex = i + 1
      }
      i++
    } else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      i++
      while (i < n && ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z'))) {
        i++
      }
      count++
      if (count === MAX_SPLIT_LENGTH) {
        forceBreakIndex = i
      }
    } else {
      if (chinesePunctuations.has(char)) {
        if (count >= MIN_SPLIT_LENGTH && firstValidPunctAfterMin === -1) {
          firstValidPunctAfterMin = i
        }
        i++
      } else if (englishPunctuations.has(char)) {
        if (i + 1 >= n || text[i + 1] === ' ') {
          if (count >= MIN_SPLIT_LENGTH && firstValidPunctAfterMin === -1) {
            firstValidPunctAfterMin = i
          }
        }
        i++
      } else {
        i++
      }
    }
  }

  let splitIndex = -1
  if (firstValidPunctAfterMin !== -1) {
    splitIndex = firstValidPunctAfterMin + 1
  } else if (forceBreakIndex !== -1) {
    splitIndex = forceBreakIndex
  }

  if (splitIndex > 0 && splitIndex < text.length) {
    return [text.substring(0, splitIndex), text.substring(splitIndex)]
  }

  return [text]
}

/**
 * 本地存储工具
 */
export const storage = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const value = localStorage.getItem(key)
      if (value === null) return defaultValue
      return JSON.parse(value)
    } catch {
      return defaultValue
    }
  },

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.error('存储失败:', e)
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.error('删除失败:', e)
    }
  }
}

// 存储键名
export const STORAGE_KEYS = {
  AVATAR_CONFIG: 'starwhisper_avatar',
  LLM_CONFIG: 'starwhisper_llm',
  ASR_CONFIG: 'starwhisper_asr'
} as const
