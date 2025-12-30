<template>
  <div class="config-panel" :class="{ collapsed: !appState.ui.configPanelVisible }">
    <!-- 折叠按钮 -->
    <button class="toggle-btn" @click="appState.ui.configPanelVisible = !appState.ui.configPanelVisible">
      {{ appState.ui.configPanelVisible ? '&#x276F;' : '&#x276E;' }}
    </button>

    <div v-show="appState.ui.configPanelVisible" class="panel-content">
      <div class="panel-header">
        <h2 class="panel-title">配置中心</h2>
      </div>

      <!-- Tab 切换 -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="tab-btn"
          :class="{ active: appState.ui.activeConfigTab === tab.id }"
          @click="appState.ui.activeConfigTab = tab.id"
        >
          {{ tab.name }}
        </button>
      </div>

      <!-- LLM 配置 -->
      <div v-show="appState.ui.activeConfigTab === 'llm'" class="config-section">
        <div class="form-group">
          <label>AI 服务商</label>
          <select v-model="appState.llm.provider" @change="onProviderChange">
            <option v-for="p in providers" :key="p.id" :value="p.id">{{ p.name }}</option>
          </select>
        </div>

        <div class="form-group">
          <label>API 地址</label>
          <input
            v-model="appState.llm.baseURL"
            type="text"
            placeholder="https://api.example.com/v1"
            :disabled="appState.llm.provider !== 'custom'"
          />
        </div>

        <div class="form-group">
          <label>模型选择</label>
          <select v-if="currentProvider?.models.length" v-model="appState.llm.model">
            <option v-for="m in currentProvider.models" :key="m" :value="m">{{ m }}</option>
          </select>
          <input v-else v-model="appState.llm.model" type="text" placeholder="请输入模型名称" />
        </div>

        <div class="form-group">
          <label>API Key</label>
          <input v-model="appState.llm.apiKey" type="password" placeholder="请输入 API Key" />
        </div>

        <div class="button-row">
          <button class="btn btn-test" :disabled="isTesting" @click="handleTestLlm">
            {{ isTesting ? '测试中...' : '测试连接' }}
          </button>
        </div>

        <div v-if="testResult" class="test-result" :class="{ success: testResult.success }">
          {{ testResult.message }}
        </div>
      </div>

      <!-- 数字人配置 -->
      <div v-show="appState.ui.activeConfigTab === 'avatar'" class="config-section">
        <div class="form-group">
          <label>APP ID</label>
          <input v-model="appState.avatar.appId" type="text" placeholder="请输入魔珐星云 APP ID" />
        </div>

        <div class="form-group">
          <label>APP Secret</label>
          <input v-model="appState.avatar.appSecret" type="password" placeholder="请输入 APP Secret" />
        </div>

        <div class="button-row">
          <button
            class="btn btn-primary"
            :disabled="isConnecting || appState.avatar.connected"
            @click="handleConnect"
          >
            {{ isConnecting ? '连接中...' : appState.avatar.connected ? '已连接' : '连接数字人' }}
          </button>
          <button
            v-if="appState.avatar.connected"
            class="btn btn-secondary"
            @click="handleDisconnect"
          >
            断开
          </button>
        </div>
      </div>

      <!-- ASR 配置 -->
      <div v-show="appState.ui.activeConfigTab === 'asr'" class="config-section">
        <div class="form-group">
          <label>ASR 服务商</label>
          <select v-model="appState.asr.provider">
            <option value="tx">腾讯云</option>
          </select>
        </div>

        <div class="form-group">
          <label>App ID</label>
          <input v-model="appState.asr.appId" type="text" placeholder="请输入腾讯云 ASR App ID" />
        </div>

        <div class="form-group">
          <label>Secret ID</label>
          <input v-model="appState.asr.secretId" type="text" placeholder="请输入 Secret ID" />
        </div>

        <div class="form-group">
          <label>Secret Key</label>
          <input v-model="appState.asr.secretKey" type="password" placeholder="请输入 Secret Key" />
        </div>

        <div class="asr-hint">
          配置后可使用语音输入功能
        </div>
      </div>

      <!-- 语音输入按钮 -->
      <div v-if="appState.avatar.connected" class="voice-section">
        <button
          class="btn btn-voice"
          :class="{ recording: appState.asr.isListening }"
          :disabled="!hasAsrConfig"
          @click="handleVoiceInput"
        >
          {{ appState.asr.isListening ? '正在录音...' : '语音输入' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, ref, computed } from 'vue'
import { useAsr } from '../composables/useAsr'
import { LLM_PROVIDERS } from '../constants'
import type { AppState, AppStore } from '../types'

const appState = inject<AppState>('appState')!
const appStore = inject<AppStore>('appStore')!

const tabs = [
  { id: 'llm', name: 'AI配置' },
  { id: 'avatar', name: '数字人' },
  { id: 'asr', name: '语音识别' }
]

const providers = LLM_PROVIDERS
const isConnecting = ref(false)
const isTesting = ref(false)
const testResult = ref<{ success: boolean; message: string } | null>(null)

const currentProvider = computed(() => {
  return providers.find(p => p.id === appState.llm.provider)
})

const hasAsrConfig = computed(() => {
  return appState.asr.appId && appState.asr.secretId && appState.asr.secretKey
})

const onProviderChange = () => {
  const provider = currentProvider.value
  if (provider) {
    appState.llm.baseURL = provider.baseURL
    appState.llm.model = provider.defaultModel
  }
  testResult.value = null
}

const handleTestLlm = async () => {
  isTesting.value = true
  testResult.value = null
  try {
    testResult.value = await appStore.testLlmConnection()
  } catch (error: any) {
    testResult.value = { success: false, message: error.message }
  } finally {
    isTesting.value = false
  }
}

const handleConnect = async () => {
  isConnecting.value = true
  try {
    await appStore.connectAvatar()
  } catch (error: any) {
    alert(error.message || '连接失败')
  } finally {
    isConnecting.value = false
  }
}

const handleDisconnect = () => {
  appStore.disconnectAvatar()
}

// ASR 功能
let asrInstance: ReturnType<typeof useAsr> | null = null

const handleVoiceInput = () => {
  if (appState.asr.isListening) {
    asrInstance?.stop()
    appStore.stopVoiceInput()
    return
  }

  if (!hasAsrConfig.value) {
    alert('请先配置 ASR 信息')
    return
  }

  asrInstance = useAsr({
    provider: 'tx',
    appId: appState.asr.appId,
    secretId: appState.asr.secretId,
    secretKey: appState.asr.secretKey
  })

  appStore.startVoiceInput({
    onFinished: (text: string) => {
      appState.tarot.question = text
      appStore.stopVoiceInput()
    },
    onError: (error: any) => {
      console.error('语音识别错误:', error)
      appStore.stopVoiceInput()
    }
  })

  asrInstance.start({
    onFinished: (text: string) => {
      appState.tarot.question = text
      appStore.stopVoiceInput()
    },
    onError: (error: any) => {
      console.error('语音识别错误:', error)
      appStore.stopVoiceInput()
    }
  })
}
</script>

<style scoped>
.config-panel {
  width: 360px;
  min-width: 360px;
  height: 100%;
  background: rgba(15, 8, 30, 0.95);
  border-left: 1px solid rgba(138, 99, 255, 0.2);
  position: relative;
  transition: width 0.3s, min-width 0.3s;
  overflow: hidden;
}

.config-panel.collapsed {
  width: 40px;
  min-width: 40px;
}

.toggle-btn {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 60px;
  background: rgba(138, 99, 255, 0.3);
  border: none;
  border-radius: 0 8px 8px 0;
  color: #e0d0ff;
  cursor: pointer;
  z-index: 10;
  font-size: 12px;
}

.toggle-btn:hover {
  background: rgba(138, 99, 255, 0.5);
}

.panel-content {
  height: 100%;
  overflow-y: auto;
  padding: 20px;
  padding-left: 32px;
}

.panel-header {
  margin-bottom: 20px;
}

.panel-title {
  margin: 0;
  font-size: 18px;
  color: #e0d0ff;
  font-weight: 500;
}

.tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(138, 99, 255, 0.2);
  padding-bottom: 12px;
}

.tab-btn {
  padding: 8px 16px;
  border: none;
  background: transparent;
  color: #706090;
  cursor: pointer;
  font-size: 13px;
  border-radius: 6px;
  transition: all 0.3s;
}

.tab-btn:hover {
  color: #a090c0;
  background: rgba(138, 99, 255, 0.1);
}

.tab-btn.active {
  color: #e0d0ff;
  background: rgba(138, 99, 255, 0.3);
}

.config-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 13px;
  color: #a090c0;
}

.form-group input,
.form-group select {
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid rgba(138, 99, 255, 0.3);
  background: rgba(20, 10, 40, 0.6);
  color: #e0d0ff;
  font-size: 13px;
  outline: none;
  transition: border-color 0.3s;
}

.form-group input:focus,
.form-group select:focus {
  border-color: #8a63ff;
}

.form-group input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-group input::placeholder {
  color: #504070;
}

.form-group select option {
  background: #1a0a3a;
  color: #e0d0ff;
}

.button-row {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #8a63ff 0%, #6a43df 100%);
  color: #fff;
}

.btn-primary:hover:not(:disabled) {
  box-shadow: 0 4px 15px rgba(138, 99, 255, 0.4);
}

.btn-secondary {
  background: rgba(138, 99, 255, 0.2);
  color: #a090c0;
}

.btn-secondary:hover:not(:disabled) {
  background: rgba(138, 99, 255, 0.3);
}

.btn-test {
  background: rgba(100, 200, 150, 0.2);
  color: #90d0b0;
}

.btn-test:hover:not(:disabled) {
  background: rgba(100, 200, 150, 0.3);
}

.test-result {
  padding: 10px 12px;
  border-radius: 6px;
  font-size: 12px;
  background: rgba(255, 100, 100, 0.2);
  color: #ff9090;
  border: 1px solid rgba(255, 100, 100, 0.3);
}

.test-result.success {
  background: rgba(100, 200, 150, 0.2);
  color: #90d0b0;
  border-color: rgba(100, 200, 150, 0.3);
}

.asr-hint {
  font-size: 12px;
  color: #706090;
  padding: 10px;
  background: rgba(138, 99, 255, 0.1);
  border-radius: 6px;
}

.voice-section {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(138, 99, 255, 0.2);
}

.btn-voice {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #4a90ff 0%, #3070df 100%);
  color: #fff;
}

.btn-voice:hover:not(:disabled) {
  box-shadow: 0 4px 15px rgba(74, 144, 255, 0.4);
}

.btn-voice.recording {
  background: linear-gradient(135deg, #ff6060 0%, #df4040 100%);
  animation: pulse-recording 1s infinite;
}

@keyframes pulse-recording {
  0%, 100% { box-shadow: 0 0 0 0 rgba(255, 96, 96, 0.4); }
  50% { box-shadow: 0 0 0 10px rgba(255, 96, 96, 0); }
}

/* 滚动条样式 */
.panel-content::-webkit-scrollbar {
  width: 4px;
}

.panel-content::-webkit-scrollbar-track {
  background: rgba(138, 99, 255, 0.1);
}

.panel-content::-webkit-scrollbar-thumb {
  background: rgba(138, 99, 255, 0.4);
  border-radius: 2px;
}
</style>
