import type { TarotCard, DrawnCard, SpreadType } from '../types'
import { TAROT_CARDS } from '../data/tarot-cards'
import { SPREAD_TYPES } from '../constants'

class TarotService {
  private deck: TarotCard[] = []

  constructor() {
    this.resetDeck()
  }

  /**
   * 重置牌组
   */
  resetDeck(): void {
    this.deck = [...TAROT_CARDS]
  }

  /**
   * 洗牌 (Fisher-Yates shuffle)
   */
  shuffle(): void {
    for (let i = this.deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]]
    }
  }

  /**
   * 抽取指定数量的牌
   */
  draw(count: number): DrawnCard[] {
    const drawnCards: DrawnCard[] = []

    for (let i = 0; i < count && this.deck.length > 0; i++) {
      const card = this.deck.pop()!
      // 随机决定正位或逆位 (50%概率)
      const position = Math.random() < 0.5 ? 'upright' : 'reversed'
      drawnCards.push({ card, position })
    }

    return drawnCards
  }

  /**
   * 根据牌阵类型抽牌
   */
  drawBySpread(spreadId: string): DrawnCard[] {
    const spread = this.getSpreadById(spreadId)
    if (!spread) {
      throw new Error(`未知的牌阵类型: ${spreadId}`)
    }

    // 重置并洗牌
    this.resetDeck()
    this.shuffle()

    // 抽牌
    const cards = this.draw(spread.cardCount)

    // 设置位置名称
    cards.forEach((card, index) => {
      card.positionName = spread.positions[index]
    })

    return cards
  }

  /**
   * 获取牌阵配置
   */
  getSpreadById(spreadId: string): SpreadType | undefined {
    return SPREAD_TYPES.find(s => s.id === spreadId)
  }

  /**
   * 获取所有牌阵类型
   */
  getAllSpreads(): SpreadType[] {
    return SPREAD_TYPES
  }

  /**
   * 获取所有塔罗牌
   */
  getAllCards(): TarotCard[] {
    return TAROT_CARDS
  }

  /**
   * 根据ID获取卡牌
   */
  getCardById(id: string): TarotCard | undefined {
    return TAROT_CARDS.find(card => card.id === id)
  }
}

export const tarotService = new TarotService()
