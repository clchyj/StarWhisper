<template>
  <div class="tarot-card" :class="{ flipped: isFlipped, reversed: card?.position === 'reversed' }">
    <div class="card-inner" @click="handleClick">
      <!-- 牌背面 -->
      <div class="card-face card-back">
        <img :src="backImage" alt="牌背" />
      </div>
      <!-- 牌正面 -->
      <div class="card-face card-front">
        <img :src="card?.card.imageUrl" :alt="card?.card.nameCn" />
        <div class="card-overlay">
          <div class="card-name">{{ card?.card.nameCn }}</div>
          <div class="card-position">{{ card?.position === 'upright' ? '正位' : '逆位' }}</div>
        </div>
      </div>
    </div>
    <div v-if="positionLabel" class="position-label">{{ positionLabel }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { DrawnCard } from '../types'
import { CARD_BACK_IMAGE } from '../data/tarot-cards'

const props = defineProps<{
  card?: DrawnCard
  positionLabel?: string
  autoFlip?: boolean
  flipDelay?: number
}>()

const emit = defineEmits<{
  (e: 'flipped'): void
}>()

const isFlipped = ref(false)
const backImage = CARD_BACK_IMAGE

const handleClick = () => {
  if (!isFlipped.value && props.card) {
    isFlipped.value = true
    emit('flipped')
  }
}

// 自动翻牌
if (props.autoFlip && props.card) {
  setTimeout(() => {
    isFlipped.value = true
    emit('flipped')
  }, props.flipDelay || 0)
}
</script>

<style scoped>
.tarot-card {
  width: 120px;
  height: 200px;
  perspective: 1000px;
  cursor: pointer;
  position: relative;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.tarot-card.flipped .card-inner {
  transform: rotateY(180deg);
}

.tarot-card.reversed.flipped .card-inner {
  transform: rotateY(180deg) rotateZ(180deg);
}

.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(138, 99, 255, 0.2);
}

.card-face img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-back {
  background: linear-gradient(135deg, #2a1a4a 0%, #1a0a3a 100%);
}

.card-back img {
  opacity: 0.9;
}

.card-front {
  transform: rotateY(180deg);
  background: #1a1a2e;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));
  text-align: center;
}

.card-name {
  font-size: 12px;
  color: #e0d0ff;
  font-weight: 500;
}

.card-position {
  font-size: 10px;
  color: #a090c0;
  margin-top: 2px;
}

.position-label {
  position: absolute;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
  color: #a090c0;
  white-space: nowrap;
}

.tarot-card:hover .card-inner {
  transform: scale(1.05);
}

.tarot-card.flipped:hover .card-inner {
  transform: rotateY(180deg) scale(1.05);
}

.tarot-card.reversed.flipped:hover .card-inner {
  transform: rotateY(180deg) rotateZ(180deg) scale(1.05);
}
</style>
