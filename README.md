# Star Whisper 星语者

AI 塔罗疗愈师 - 将 AI 大语言模型与塔罗占卜相结合的沉浸式数字人交互应用

## 项目简介

Star Whisper（星语者）是一个现代化的 Web 应用，将 AI 大语言模型与塔罗占卜相结合，提供沉浸式的虚拟数字人塔罗解读体验。用户可以通过文字或语音输入问题、选择牌阵、抽取塔罗牌，并由 AI 驱动的"星语者"数字人进行温暖而神秘的解读。

## 技术栈

- **前端框架**: Vue 3.5.18 + TypeScript 5.8
- **构建工具**: Vite 7.1
- **AI 集成**: OpenAI SDK（兼容多家 LLM 服务商）
- **虚拟数字人**: 魔珐星云 XmovAvatar SDK
- **语音识别**: 腾讯云 ASR

## 核心功能

### 塔罗占卜

- 支持 4 种牌阵：单牌占卜、三牌阵、爱情三牌阵、二择一牌阵
- 完整的 78 张标准塔罗牌（22 张大阿卡纳 + 56 张小阿卡纳）
- 每张牌包含中英文名称、正位/逆位含义、高清图片
- 3D 翻牌动画效果

### AI 解读

- 支持多个 LLM 服务商：
  - 硅基流动（SiliconFlow）
  - 智普清言（Zhipu AI）
  - 魔塔大模型（Dashscope）
  - 豆包（火山引擎）
  - 自定义 OpenAI 兼容 API
- 流式输出，实时展示解读内容
- "星语者"人设，提供温暖、神秘的塔罗解读风格

### 虚拟数字人

- 集成魔珐星云 3D 数字人
- 实时语音播报解读内容
- 字幕同步显示

### 语音输入

- 腾讯云 ASR 语音识别
- 支持实时语音转文字提问

## 项目结构

```
starwhisper/
├── src/
│   ├── main.ts                 # 应用入口
│   ├── App.vue                 # 根组件
│   ├── components/             # Vue 组件
│   │   ├── AvatarView.vue      # 数字人显示区
│   │   ├── ConfigPanel.vue     # 配置面板
│   │   ├── ReadingPanel.vue    # 解读结果展示
│   │   ├── SpreadSelector.vue  # 牌阵选择器
│   │   ├── TarotBoard.vue      # 塔罗牌操作区
│   │   └── TarotCard.vue       # 塔罗牌组件
│   ├── services/               # 业务服务
│   │   ├── avatar.ts           # 虚拟人服务
│   │   ├── llm.ts              # LLM API 服务
│   │   └── tarot.ts            # 塔罗牌逻辑
│   ├── stores/                 # 状态管理
│   │   └── app.ts              # 全局应用状态
│   ├── composables/            # Vue Composables
│   │   └── useAsr.ts           # 语音识别钩子
│   ├── constants/              # 常量配置
│   ├── types/                  # TypeScript 类型
│   ├── data/                   # 数据文件
│   │   └── tarot-cards.ts      # 78张塔罗牌数据
│   └── utils/                  # 工具函数
├── public/
│   ├── img/                    # 塔罗牌图片资源
│   ├── cryptojs.js             # CryptoJS（ASR 签名）
│   └── speechrecognizer.js     # 腾讯云 ASR 库
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 http://localhost:5174 启动

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 配置说明

应用启动后，需要在右侧配置面板中进行以下配置：

### LLM 配置

1. 选择 LLM 服务商（或选择"自定义"）
2. 填入对应的 API Key
3. 选择模型（可选，默认使用推荐模型）
4. 点击"测试连接"验证配置

### 虚拟人配置

1. 填入魔珐星云的 App ID
2. 填入 App Secret
3. 点击"连接"启动数字人

### ASR 配置（可选）

1. 填入腾讯云 App ID
2. 填入 Secret ID
3. 填入 Secret Key

所有配置会自动保存到浏览器本地存储。

## 使用流程

1. **配置服务** - 在配置面板中完成 LLM 和虚拟人的配置
2. **连接数字人** - 点击连接按钮，等待数字人加载
3. **输入问题** - 在问题输入框中输入想要占卜的问题（支持语音输入）
4. **选择牌阵** - 选择适合的牌阵类型
5. **抽取塔罗牌** - 点击"抽牌"按钮，观看 3D 翻牌动画
6. **获取解读** - 点击"开始解读"，AI 数字人将为你进行专业解读

## 支持的牌阵

| 牌阵名称   | 牌数 | 适用场景       |
| ---------- | ---- | -------------- |
| 单牌占卜   | 1 张 | 快速获取指引   |
| 三牌阵     | 3 张 | 过去-现在-未来 |
| 爱情三牌阵 | 3 张 | 感情问题分析   |
| 二择一牌阵 | 3 张 | 选择决策辅助   |

## LLM 服务商配置参考

| 服务商     | Base URL                                          | 推荐模型                  |
| ---------- | ------------------------------------------------- | ------------------------- |
| 硅基流动   | https://api.siliconflow.cn/v1                     | Qwen/Qwen2.5-72B-Instruct |
| 智普清言   | https://open.bigmodel.cn/api/paas/v4              | glm-4-flash               |
| 魔塔大模型 | https://dashscope.aliyuncs.com/compatible-mode/v1 | qwen-max                  |
| 豆包       | https://ark.cn-beijing.volces.com/api/v3          | -                         |

## 开发说明

### 添加新的 LLM 服务商

在 `src/constants/index.ts` 中的 `LLM_PROVIDERS` 数组添加新配置：

```typescript
{
  id: 'new-provider',
  name: '新服务商',
  baseURL: 'https://api.example.com/v1',
  models: ['model-1', 'model-2']
}
```

### 添加新的牌阵

在 `src/constants/index.ts` 中的 `SPREAD_TYPES` 数组添加新牌阵：

```typescript
{
  id: 'new-spread',
  name: '新牌阵',
  description: '牌阵描述',
  cardCount: 5,
  positions: ['位置1', '位置2', '位置3', '位置4', '位置5']
}
```

## 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 许可证

MIT License

## 致谢

- [魔珐星云](https://www.xmov.ai/) - 虚拟数字人技术支持
- [腾讯云](https://cloud.tencent.com/) - ASR 语音识别服务
- 塔罗牌图片资源来自网络公开资源
