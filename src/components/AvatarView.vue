<template>
  <div ref="containerRef" class="avatar-view">
    <!-- SDK 渲染容器 -->
    <div :id="containerId" class="sdk-container" />

    <!-- 字幕显示 -->
    <div v-show="appState.ui.subTitleText" class="subtitle">
      {{ appState.ui.subTitleText }}
    </div>

    <!-- 语音输入动画 -->
    <div v-show="appState.asr.isListening" class="voice-animation">
      <img :src="siriIcon" alt="语音输入" />
    </div>

    <!-- 加载状态 -->
    <div v-if="!appState.avatar.connected" class="loading-placeholder">
      <div class="loading-icon">&#x2728;</div>
      <div class="loading-text">等待连接数字人...</div>
      <div class="loading-hint">请在右侧配置面板中填写数字人配置</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { avatarService } from '../services/avatar'
import type { AppState } from '../types'
import siriIcon from '../assets/siri.png'

const appState = inject<AppState>('appState')!
const containerId = computed(() => avatarService.getContainerId())
</script>

<style scoped>
.avatar-view {
  flex: 1;
  position: relative;
  background: linear-gradient(180deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%);
  min-height: 400px;
  overflow: hidden;
}

.sdk-container {
  width: 100%;
  height: 100%;
}

.subtitle {
  position: absolute;
  z-index: 100;
  bottom: 100px;
  left: 50%;
  width: 80%;
  max-width: 600px;
  word-break: break-word;
  text-align: center;
  transform: translateX(-50%);
  font-size: 18px;
  color: #e0d0ff;
  border: 1px solid rgba(138, 99, 255, 0.3);
  padding: 12px 20px;
  border-radius: 12px;
  background: rgba(20, 10, 40, 0.85);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(138, 99, 255, 0.2);
}

.voice-animation {
  position: absolute;
  left: 50%;
  top: 75%;
  transform: translateX(-50%);
  width: 300px;
  max-width: 80%;
  z-index: 101;
}

.voice-animation > img {
  width: 100%;
  height: auto;
  filter: hue-rotate(270deg);
}

.loading-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at center, rgba(138, 99, 255, 0.1) 0%, transparent 70%);
}

.loading-icon {
  font-size: 48px;
  margin-bottom: 16px;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.loading-text {
  font-size: 20px;
  color: #a090c0;
  font-weight: 500;
  margin-bottom: 8px;
}

.loading-hint {
  font-size: 14px;
  color: #706090;
}
</style>
