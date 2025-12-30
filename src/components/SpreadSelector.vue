<template>
  <div class="spread-selector">
    <h3 class="title">选择牌阵</h3>
    <div class="spreads">
      <div
        v-for="spread in spreads"
        :key="spread.id"
        class="spread-item"
        :class="{ active: modelValue === spread.id }"
        @click="$emit('update:modelValue', spread.id)"
      >
        <div class="spread-name">{{ spread.name }}</div>
        <div class="spread-count">{{ spread.cardCount }}张牌</div>
        <div class="spread-desc">{{ spread.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SPREAD_TYPES } from '../constants'

defineProps<{
  modelValue: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const spreads = SPREAD_TYPES
</script>

<style scoped>
.spread-selector {
  padding: 16px;
}

.title {
  font-size: 16px;
  color: #e0d0ff;
  margin: 0 0 12px 0;
  font-weight: 500;
}

.spreads {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.spread-item {
  padding: 12px;
  border-radius: 8px;
  background: rgba(138, 99, 255, 0.1);
  border: 1px solid rgba(138, 99, 255, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.spread-item:hover {
  background: rgba(138, 99, 255, 0.2);
  border-color: rgba(138, 99, 255, 0.4);
}

.spread-item.active {
  background: rgba(138, 99, 255, 0.3);
  border-color: #8a63ff;
  box-shadow: 0 0 20px rgba(138, 99, 255, 0.3);
}

.spread-name {
  font-size: 14px;
  color: #e0d0ff;
  font-weight: 500;
  margin-bottom: 4px;
}

.spread-count {
  font-size: 12px;
  color: #8a63ff;
  margin-bottom: 4px;
}

.spread-desc {
  font-size: 11px;
  color: #706090;
  line-height: 1.4;
}
</style>
