<template>
  <div class="reading-panel">
    <div class="panel-header">
      <span class="icon">&#x2728;</span>
      <span class="title">星语者的解读</span>
    </div>
    <div class="reading-content">
      <p class="reading-text">{{ reading }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  reading: string
}>()
</script>

<style scoped>
.reading-panel {
  margin: 16px;
  border-radius: 12px;
  background: rgba(20, 10, 40, 0.8);
  border: 1px solid rgba(138, 99, 255, 0.3);
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(138, 99, 255, 0.2);
  border-bottom: 1px solid rgba(138, 99, 255, 0.2);
}

.icon {
  font-size: 18px;
}

.title {
  font-size: 14px;
  font-weight: 500;
  color: #e0d0ff;
}

.reading-content {
  padding: 16px;
  max-height: 300px;
  overflow-y: auto;
}

.reading-text {
  margin: 0;
  font-size: 14px;
  line-height: 1.8;
  color: #c0b0e0;
  white-space: pre-wrap;
}

/* 滚动条样式 */
.reading-content::-webkit-scrollbar {
  width: 4px;
}

.reading-content::-webkit-scrollbar-track {
  background: rgba(138, 99, 255, 0.1);
}

.reading-content::-webkit-scrollbar-thumb {
  background: rgba(138, 99, 255, 0.4);
  border-radius: 2px;
}
</style>
