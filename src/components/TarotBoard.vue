<template>
  <div class="tarot-board">
    <!-- 问题输入 -->
    <div class="question-section">
      <div class="section-title">你的困惑</div>
      <textarea
        v-model="appState.tarot.question"
        class="question-input"
        placeholder="请输入你想询问的问题...（可选）"
        rows="2"
      />
    </div>

    <!-- 牌阵选择 -->
    <SpreadSelector v-model="appState.tarot.currentSpread" />

    <!-- 抽牌区域 -->
    <div class="draw-section">
      <button
        class="draw-button"
        :disabled="isDrawing || appState.tarot.isReading"
        @click="handleDraw"
      >
        <span v-if="isDrawing">洗牌中...</span>
        <span v-else-if="appState.tarot.drawnCards.length">重新抽牌</span>
        <span v-else>开始抽牌</span>
      </button>
    </div>

    <!-- 展示已抽取的牌 -->
    <div v-if="appState.tarot.drawnCards.length" class="cards-display">
      <div class="cards-row">
        <TarotCard
          v-for="(card, index) in appState.tarot.drawnCards"
          :key="card.card.id"
          :card="card"
          :position-label="card.positionName"
          :auto-flip="true"
          :flip-delay="index * 500"
          @flipped="onCardFlipped(index)"
        />
      </div>
    </div>

    <!-- 解读按钮 -->
    <div v-if="appState.tarot.drawnCards.length && allCardsFlipped" class="divine-section">
      <button
        class="divine-button"
        :disabled="appState.tarot.isReading"
        @click="handleDivine"
      >
        <span v-if="appState.tarot.isReading">解读中...</span>
        <span v-else>开始解读</span>
      </button>
    </div>

    <!-- 解读结果 -->
    <ReadingPanel v-if="appState.tarot.reading" :reading="appState.tarot.reading" />
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import type { AppState, AppStore } from '../types'
import TarotCard from './TarotCard.vue'
import SpreadSelector from './SpreadSelector.vue'
import ReadingPanel from './ReadingPanel.vue'

const appState = inject<AppState>('appState')!
const appStore = inject<AppStore>('appStore')!

const isDrawing = ref(false)
const flippedCount = ref(0)
const allCardsFlipped = ref(false)

const handleDraw = async () => {
  isDrawing.value = true
  flippedCount.value = 0
  allCardsFlipped.value = false
  appState.tarot.reading = ''

  // 模拟洗牌延迟
  await new Promise(resolve => setTimeout(resolve, 1000))

  appStore.drawCards()
  isDrawing.value = false
}

const onCardFlipped = (index: number) => {
  flippedCount.value++
  if (flippedCount.value >= appState.tarot.drawnCards.length) {
    allCardsFlipped.value = true
  }
}

const handleDivine = async () => {
  try {
    await appStore.divine()
  } catch (error: any) {
    alert(error.message || '解读失败')
  }
}
</script>

<style scoped>
.tarot-board {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section-title {
  font-size: 14px;
  color: #a090c0;
  margin-bottom: 8px;
}

.question-section {
  padding: 0 16px;
}

.question-input {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(138, 99, 255, 0.3);
  background: rgba(20, 10, 40, 0.6);
  color: #e0d0ff;
  font-size: 14px;
  resize: none;
  outline: none;
  transition: border-color 0.3s;
}

.question-input:focus {
  border-color: #8a63ff;
}

.question-input::placeholder {
  color: #706090;
}

.draw-section {
  display: flex;
  justify-content: center;
  padding: 16px;
}

.draw-button {
  padding: 14px 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background: linear-gradient(135deg, #8a63ff 0%, #6a43df 100%);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 20px rgba(138, 99, 255, 0.4);
}

.draw-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(138, 99, 255, 0.5);
}

.draw-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.cards-display {
  padding: 20px;
  display: flex;
  justify-content: center;
}

.cards-row {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
}

.divine-section {
  display: flex;
  justify-content: center;
  padding: 16px;
}

.divine-button {
  padding: 12px 36px;
  font-size: 15px;
  font-weight: 500;
  color: #1a0a3a;
  background: linear-gradient(135deg, #ffd700 0%, #ffaa00 100%);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.4);
}

.divine-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(255, 215, 0, 0.5);
}

.divine-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
