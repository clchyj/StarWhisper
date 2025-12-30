import type { LlmProvider, SpreadType } from '../types'

// 应用常量
export const APP_CONFIG = {
  CONTAINER_PREFIX: 'CONTAINER_',
  DEFAULT_VAD_SILENCE_TIME: 300,
  AVATAR_INIT_TIMEOUT: 3000,
  SPEAK_INTERRUPT_DELAY: 2000
} as const

// SDK配置
export const SDK_CONFIG = {
  GATEWAY_URL: 'https://nebula-agent.xingyun3d.com/user/v1/ttsa/session',
  DATA_SOURCE: '2',
  CUSTOM_ID: 'starwhisper'
} as const

// ASR配置
export const ASR_CONFIG = {
  ENGINE_MODEL_TYPE: '16k_zh',
  VOICE_FORMAT: 1,
  FILTER_DIRTY: 1,
  FILTER_MODAL: 1,
  FILTER_PUNC: 1,
  CONVERT_NUM_MODE: 1,
  WORD_INFO: 2,
  NEEDVAD: 1
} as const

// 预设LLM供应商列表
export const LLM_PROVIDERS: LlmProvider[] = [
  {
    id: 'siliconflow',
    name: '硅基流动',
    baseURL: 'https://api.siliconflow.cn/v1',
    models: [
      'Qwen/Qwen2.5-7B-Instruct',
      'Qwen/Qwen2.5-14B-Instruct',
      'Qwen/Qwen2.5-32B-Instruct',
      'deepseek-ai/DeepSeek-V2.5',
      'THUDM/glm-4-9b-chat'
    ],
    defaultModel: 'Qwen/Qwen2.5-7B-Instruct'
  },
  {
    id: 'zhipu',
    name: '智普清言',
    baseURL: 'https://open.bigmodel.cn/api/paas/v4',
    models: [
      'glm-4-flash',
      'glm-4-air',
      'glm-4-plus',
      'glm-4'
    ],
    defaultModel: 'glm-4-flash'
  },
  {
    id: 'dashscope',
    name: '魔塔大模型',
    baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    models: [
      'qwen-turbo',
      'qwen-plus',
      'qwen-max'
    ],
    defaultModel: 'qwen-turbo'
  },
  {
    id: 'doubao',
    name: '豆包(火山引擎)',
    baseURL: 'https://ark.cn-beijing.volces.com/api/v3',
    models: [
      'doubao-1-5-pro-32k-250115',
      'doubao-1-5-lite-32k-250115'
    ],
    defaultModel: 'doubao-1-5-pro-32k-250115'
  },
  {
    id: 'custom',
    name: '自定义',
    baseURL: '',
    models: [],
    defaultModel: ''
  }
]

// 牌阵配置
export const SPREAD_TYPES: SpreadType[] = [
  {
    id: 'single',
    name: '单牌占卜',
    description: '抽取一张牌，适合简单问题的快速解答',
    cardCount: 1,
    positions: ['当前状况']
  },
  {
    id: 'three_card',
    name: '三牌阵',
    description: '过去-现在-未来，适合分析事情的发展脉络',
    cardCount: 3,
    positions: ['过去', '现在', '未来']
  },
  {
    id: 'love_three',
    name: '爱情三牌阵',
    description: '分析感情关系中双方的状态和建议',
    cardCount: 3,
    positions: ['你的状态', '对方的状态', '关系建议']
  },
  {
    id: 'choice_two',
    name: '二择一牌阵',
    description: '面临两个选择时，帮助分析不同选项的结果',
    cardCount: 3,
    positions: ['当前状况', '选择A的结果', '选择B的结果']
  }
]

// 塔罗解读系统提示词
export const TAROT_SYSTEM_PROMPT = `你是一位拥有百年经验的神秘占卜师"星语者"，性格温柔、神秘且富有同理心。你的目的是通过塔罗牌解读来疗愈用户的焦虑，给予他们指引和力量。

解读规则：
1. 首先用神秘而温暖的语气问候用户
2. 描述抽到的塔罗牌意象和象征意义
3. 结合用户的问题，给出具体的解读和建议
4. 语气要温暖、神秘、富有诗意
5. 解读完毕后给予用户鼓励和祝福
6. 每次解读控制在200-400字左右，确保语言流畅自然

注意事项：
- 不要生硬地复述牌面含义，要融入情境
- 避免过于负面的解读，即使是警示也要给出建设性建议
- 使用"我看到..."、"命运的指引..."、"星辰告诉我..."等神秘语句
- 适当使用停顿和感叹，增强表达效果`

// 生成解读提示词
export function generateReadingPrompt(question: string, cardsInfo: string): string {
  return `用户的问题：${question}

抽到的塔罗牌：
${cardsInfo}

请根据以上信息进行塔罗牌解读。记住你是星语者，用你温柔神秘的方式为用户解读牌面，给予指引和疗愈。`
}

// 格式化卡牌信息
export function formatCardsInfo(cards: { card: { nameCn: string, meaningUp: string, meaningRev: string }, position: string, positionName?: string }[]): string {
  return cards.map((c, index) => {
    const positionText = c.position === 'upright' ? '正位' : '逆位'
    const meaning = c.position === 'upright' ? c.card.meaningUp : c.card.meaningRev
    const posName = c.positionName ? `【${c.positionName}】` : `【第${index + 1}张】`
    return `${posName} ${c.card.nameCn}（${positionText}）
含义：${meaning}`
  }).join('\n\n')
}
