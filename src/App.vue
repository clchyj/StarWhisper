<script setup lang="ts">
import { provide } from 'vue'
import AvatarView from './components/AvatarView.vue'
import TarotBoard from './components/TarotBoard.vue'
import ConfigPanel from './components/ConfigPanel.vue'
import { appState, appStore } from './stores/app'

// 提供全局状态和方法
provide('appState', appState)
provide('appStore', appStore)
</script>

<template>
  <div class="app">
    <!-- 头部标题 -->
    <header class="app-header">
      <div class="logo">
        <span class="logo-icon">&#x2728;</span>
        <span class="logo-text">星语者</span>
        <span class="logo-subtitle">AI 塔罗疗愈师</span>
      </div>
    </header>

    <!-- 主内容区 -->
    <main class="app-main">
      <!-- 左侧：数字人 -->
      <section class="avatar-section">
        <AvatarView />
      </section>

      <!-- 中间：塔罗牌 -->
      <section class="tarot-section">
        <TarotBoard />
      </section>

      <!-- 右侧：配置面板 -->
      <aside class="config-section">
        <ConfigPanel />
      </aside>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0a0a1a 100%);
}

.app-header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: rgba(10, 5, 20, 0.9);
  border-bottom: 1px solid rgba(138, 99, 255, 0.2);
  flex-shrink: 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-icon {
  font-size: 28px;
}

.logo-text {
  font-size: 22px;
  font-weight: 600;
  color: #e0d0ff;
  background: linear-gradient(135deg, #e0d0ff 0%, #8a63ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-subtitle {
  font-size: 13px;
  color: #706090;
  margin-left: 8px;
  padding-left: 12px;
  border-left: 1px solid rgba(138, 99, 255, 0.3);
}

.app-main {
  flex: 1;
  display: flex;
  overflow: hidden;
}

.avatar-section {
  width: 40%;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}

.tarot-section {
  flex: 1;
  overflow-y: auto;
  border-left: 1px solid rgba(138, 99, 255, 0.2);
  border-right: 1px solid rgba(138, 99, 255, 0.2);
  background: rgba(15, 10, 30, 0.5);
}

.config-section {
  display: flex;
  flex-shrink: 0;
}

/* 滚动条样式 */
.tarot-section::-webkit-scrollbar {
  width: 6px;
}

.tarot-section::-webkit-scrollbar-track {
  background: rgba(138, 99, 255, 0.1);
}

.tarot-section::-webkit-scrollbar-thumb {
  background: rgba(138, 99, 255, 0.3);
  border-radius: 3px;
}

.tarot-section::-webkit-scrollbar-thumb:hover {
  background: rgba(138, 99, 255, 0.5);
}

/* 响应式布局 */
@media (max-width: 1200px) {
  .avatar-section {
    width: 35%;
    min-width: 250px;
  }
}

@media (max-width: 900px) {
  .app-main {
    flex-direction: column;
  }

  .avatar-section {
    width: 100%;
    height: 300px;
    min-width: unset;
  }

  .tarot-section {
    border-left: none;
    border-right: none;
    border-top: 1px solid rgba(138, 99, 255, 0.2);
  }

  .config-section {
    position: fixed;
    right: 0;
    top: 60px;
    bottom: 0;
    z-index: 100;
  }
}
</style>
