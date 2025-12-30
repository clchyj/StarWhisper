import type { TarotCard } from '../types'

// 78张塔罗牌完整数据
export const TAROT_CARDS: TarotCard[] = [
  // ============ 大阿卡纳 (Major Arcana) 22张 ============
  {
    id: 'major_0',
    nameEn: 'The Fool',
    nameCn: '愚人',
    type: 'major',
    meaningUp: '新的开始、冒险精神、纯真无邪、自由自在、无限可能',
    meaningRev: '鲁莽冲动、缺乏计划、不切实际、愚蠢行为、错失良机',
    imageUrl: '/img/0.愚人.jpg'
  },
  {
    id: 'major_1',
    nameEn: 'The Magician',
    nameCn: '魔术师',
    type: 'major',
    meaningUp: '创造力、技能精湛、意志力强、掌控全局、心想事成',
    meaningRev: '欺骗操控、能力不足、缺乏信心、浪费才能、混乱失控',
    imageUrl: '/img/1.魔术师.jpg'
  },
  {
    id: 'major_2',
    nameEn: 'The High Priestess',
    nameCn: '女祭司',
    type: 'major',
    meaningUp: '直觉智慧、神秘力量、内在平静、隐藏知识、耐心等待',
    meaningRev: '忽视直觉、秘密暴露、情绪不稳、过于被动、信息阻塞',
    imageUrl: '/img/2.女祭司.jpg'
  },
  {
    id: 'major_3',
    nameEn: 'The Empress',
    nameCn: '女皇',
    type: 'major',
    meaningUp: '丰饶富足、母性关怀、创造力、自然之美、感官享受',
    meaningRev: '创意阻塞、依赖他人、过度放纵、缺乏关爱、不孕困扰',
    imageUrl: '/img/3.女皇.jpg'
  },
  {
    id: 'major_4',
    nameEn: 'The Emperor',
    nameCn: '皇帝',
    type: 'major',
    meaningUp: '权威领导、稳定结构、保护力量、理性决策、成就事业',
    meaningRev: '专制独裁、僵化固执、控制欲强、缺乏灵活、权力滥用',
    imageUrl: '/img/4.皇帝.jpg'
  },
  {
    id: 'major_5',
    nameEn: 'The Hierophant',
    nameCn: '教皇',
    type: 'major',
    meaningUp: '传统智慧、精神指引、教育学习、信仰虔诚、遵循规范',
    meaningRev: '打破传统、个人信念、教条主义、虚伪表面、反叛权威',
    imageUrl: '/img/5.教皇.jpg'
  },
  {
    id: 'major_6',
    nameEn: 'The Lovers',
    nameCn: '恋人',
    type: 'major',
    meaningUp: '爱情美满、和谐关系、重要选择、价值观契合、灵魂伴侣',
    meaningRev: '关系不和、选择困难、价值冲突、诱惑考验、不忠背叛',
    imageUrl: '/img/6.恋人.jpg'
  },
  {
    id: 'major_7',
    nameEn: 'The Chariot',
    nameCn: '战车',
    type: 'major',
    meaningUp: '胜利凯旋、意志坚定、克服障碍、方向明确、自律控制',
    meaningRev: '失去方向、缺乏控制、被动攻击、挫折失败、冲突对立',
    imageUrl: '/img/7.战车.jpg'
  },
  {
    id: 'major_8',
    nameEn: 'Strength',
    nameCn: '力量',
    type: 'major',
    meaningUp: '内在力量、勇气耐心、温柔坚定、自我控制、克服恐惧',
    meaningRev: '自我怀疑、缺乏勇气、内心软弱、失去信心、暴力倾向',
    imageUrl: '/img/8.力量.jpg'
  },
  {
    id: 'major_9',
    nameEn: 'The Hermit',
    nameCn: '隐士',
    type: 'major',
    meaningUp: '内省反思、寻求真理、独处沉思、智慧指引、精神追求',
    meaningRev: '孤独寂寞、逃避现实、过度封闭、拒绝帮助、迷失方向',
    imageUrl: '/img/9.隐士.jpg'
  },
  {
    id: 'major_10',
    nameEn: 'Wheel of Fortune',
    nameCn: '命运之轮',
    type: 'major',
    meaningUp: '命运转折、好运降临、因果循环、把握机遇、顺应变化',
    meaningRev: '厄运来袭、抗拒改变、错失机会、命运不济、外力干扰',
    imageUrl: '/img/10.命运之轮.jpg'
  },
  {
    id: 'major_11',
    nameEn: 'Justice',
    nameCn: '正义',
    type: 'major',
    meaningUp: '公平公正、因果报应、理性判断、诚实正直、法律事务',
    meaningRev: '不公对待、逃避责任、偏见歧视、判断失误、法律纠纷',
    imageUrl: '/img/11.正义.jpg'
  },
  {
    id: 'major_12',
    nameEn: 'The Hanged Man',
    nameCn: '倒吊人',
    type: 'major',
    meaningUp: '暂停等待、换个角度、自我牺牲、放下执念、灵性觉醒',
    meaningRev: '无谓牺牲、拖延逃避、固执己见、精神困顿、陷入僵局',
    imageUrl: '/img/12.倒吊人.jpg'
  },
  {
    id: 'major_13',
    nameEn: 'Death',
    nameCn: '死神',
    type: 'major',
    meaningUp: '结束与重生、转变蜕变、放下过去、新的开始、深层改变',
    meaningRev: '抗拒改变、恐惧结束、停滞不前、拒绝放手、精神死亡',
    imageUrl: '/img/13.死神.jpg'
  },
  {
    id: 'major_14',
    nameEn: 'Temperance',
    nameCn: '节制',
    type: 'major',
    meaningUp: '平衡和谐、耐心调和、中庸之道、自我节制、愈合疗愈',
    meaningRev: '失去平衡、极端行为、缺乏耐心、过度放纵、冲突矛盾',
    imageUrl: '/img/14.节制.jpg'
  },
  {
    id: 'major_15',
    nameEn: 'The Devil',
    nameCn: '恶魔',
    type: 'major',
    meaningUp: '诱惑束缚、物质追求、欲望驱使、阴暗面、成瘾依赖',
    meaningRev: '挣脱束缚、克服诱惑、重获自由、面对阴暗、戒除成瘾',
    imageUrl: '/img/15.恶魔.jpg'
  },
  {
    id: 'major_16',
    nameEn: 'The Tower',
    nameCn: '高塔',
    type: 'major',
    meaningUp: '突然变故、结构崩塌、真相揭示、必要破坏、意外事件',
    meaningRev: '逃避灾难、延迟崩塌、内心动荡、恐惧改变、小范围损失',
    imageUrl: '/img/16.高塔.jpg'
  },
  {
    id: 'major_17',
    nameEn: 'The Star',
    nameCn: '星星',
    type: 'major',
    meaningUp: '希望光明、心灵平静、灵感涌现、信心恢复、康复愈合',
    meaningRev: '失去希望、缺乏信心、脱离现实、创意枯竭、绝望沮丧',
    imageUrl: '/img/17.星星.jpg'
  },
  {
    id: 'major_18',
    nameEn: 'The Moon',
    nameCn: '月亮',
    type: 'major',
    meaningUp: '直觉梦境、潜意识、幻觉迷惑、恐惧不安、隐藏真相',
    meaningRev: '真相大白、走出迷雾、克服恐惧、直面内心、清醒认知',
    imageUrl: '/img/18.月亮.jpg'
  },
  {
    id: 'major_19',
    nameEn: 'The Sun',
    nameCn: '太阳',
    type: 'major',
    meaningUp: '喜悦成功、光明正大、活力充沛、乐观积极、真相显现',
    meaningRev: '暂时阴霾、过度乐观、延迟成功、自负傲慢、精力不济',
    imageUrl: '/img/19.太阳.jpg'
  },
  {
    id: 'major_20',
    nameEn: 'Judgement',
    nameCn: '审判',
    type: 'major',
    meaningUp: '觉醒复活、自我审视、更高召唤、重要决定、因果了结',
    meaningRev: '自我怀疑、逃避审视、错失召唤、判断失误、拒绝改变',
    imageUrl: '/img/20.审判.jpg'
  },
  {
    id: 'major_21',
    nameEn: 'The World',
    nameCn: '世界',
    type: 'major',
    meaningUp: '圆满完成、目标达成、整合统一、世界之旅、功德圆满',
    meaningRev: '未能完成、延迟结束、缺乏闭合、目标受阻、旅途未竟',
    imageUrl: '/img/21.世界.jpg'
  },

  // ============ 权杖 (Wands) 14张 ============
  {
    id: 'wands_ace',
    nameEn: 'Ace of Wands',
    nameCn: '权杖王牌',
    type: 'minor',
    suit: 'wands',
    meaningUp: '新的开始、创造力、灵感涌现、潜力无限、行动力强',
    meaningRev: '延迟开始、创意阻塞、缺乏动力、错失机会、方向不明',
    imageUrl: '/img/权杖王牌.jpg'
  },
  {
    id: 'wands_2',
    nameEn: 'Two of Wands',
    nameCn: '权杖二',
    type: 'minor',
    suit: 'wands',
    meaningUp: '未来规划、做出选择、探索可能、个人力量、等待时机',
    meaningRev: '恐惧改变、缺乏规划、选择困难、安于现状、视野狭窄',
    imageUrl: '/img/权杖2.jpg'
  },
  {
    id: 'wands_3',
    nameEn: 'Three of Wands',
    nameCn: '权杖三',
    type: 'minor',
    suit: 'wands',
    meaningUp: '拓展视野、展望未来、计划进展、机遇来临、远行旅途',
    meaningRev: '计划受阻、视野受限、延迟发展、回避挑战、失去机会',
    imageUrl: '/img/权杖3.jpg'
  },
  {
    id: 'wands_4',
    nameEn: 'Four of Wands',
    nameCn: '权杖四',
    type: 'minor',
    suit: 'wands',
    meaningUp: '庆祝成就、和谐稳定、归属感、里程碑、社区团结',
    meaningRev: '缺乏和谐、不稳定感、缺少归属、过渡时期、庆祝延迟',
    imageUrl: '/img/权杖4.jpg'
  },
  {
    id: 'wands_5',
    nameEn: 'Five of Wands',
    nameCn: '权杖五',
    type: 'minor',
    suit: 'wands',
    meaningUp: '竞争挑战、冲突对抗、多方角力、压力考验、激烈讨论',
    meaningRev: '避免冲突、内在挣扎、解决分歧、放弃竞争、压力释放',
    imageUrl: '/img/权杖5.jpg'
  },
  {
    id: 'wands_6',
    nameEn: 'Six of Wands',
    nameCn: '权杖六',
    type: 'minor',
    suit: 'wands',
    meaningUp: '胜利荣耀、公众认可、自信满满、领导成功、目标达成',
    meaningRev: '失败挫折、缺乏认可、自我怀疑、骄傲自大、声誉受损',
    imageUrl: '/img/权杖6.jpg'
  },
  {
    id: 'wands_7',
    nameEn: 'Seven of Wands',
    nameCn: '权杖七',
    type: 'minor',
    suit: 'wands',
    meaningUp: '坚守立场、勇敢防御、挑战压力、坚持信念、保护领地',
    meaningRev: '放弃立场、被动挨打、精疲力竭、缺乏信心、妥协退让',
    imageUrl: '/img/权杖7.jpg'
  },
  {
    id: 'wands_8',
    nameEn: 'Eight of Wands',
    nameCn: '权杖八',
    type: 'minor',
    suit: 'wands',
    meaningUp: '快速行动、消息传递、进展迅速、旅行移动、机会涌来',
    meaningRev: '延迟阻碍、消息延误、仓促行事、失去动力、计划搁浅',
    imageUrl: '/img/权杖8.jpg'
  },
  {
    id: 'wands_9',
    nameEn: 'Nine of Wands',
    nameCn: '权杖九',
    type: 'minor',
    suit: 'wands',
    meaningUp: '坚韧不拔、最后防线、保持警惕、经验积累、即将成功',
    meaningRev: '精疲力竭、放弃希望、过度防备、偏执多疑、不愿求助',
    imageUrl: '/img/权杖9.jpg'
  },
  {
    id: 'wands_10',
    nameEn: 'Ten of Wands',
    nameCn: '权杖十',
    type: 'minor',
    suit: 'wands',
    meaningUp: '责任重担、过度负荷、艰辛努力、接近终点、承担责任',
    meaningRev: '卸下重担、学会委托、释放压力、逃避责任、精力分散',
    imageUrl: '/img/权杖10.jpg'
  },
  {
    id: 'wands_page',
    nameEn: 'Page of Wands',
    nameCn: '权杖侍者',
    type: 'minor',
    suit: 'wands',
    meaningUp: '热情探索、新的想法、冒险精神、好消息、年轻活力',
    meaningRev: '缺乏方向、三分钟热度、幼稚冲动、计划落空、延迟消息',
    imageUrl: '/img/权杖侍者.jpg'
  },
  {
    id: 'wands_knight',
    nameEn: 'Knight of Wands',
    nameCn: '权杖骑士',
    type: 'minor',
    suit: 'wands',
    meaningUp: '冒险行动、热情追求、勇往直前、魅力四射、快速变化',
    meaningRev: '鲁莽冲动、半途而废、傲慢自负、缺乏耐心、延迟行动',
    imageUrl: '/img/权杖骑士.jpg'
  },
  {
    id: 'wands_queen',
    nameEn: 'Queen of Wands',
    nameCn: '权杖女王',
    type: 'minor',
    suit: 'wands',
    meaningUp: '自信独立、热情慷慨、创造力强、魅力领导、乐观开朗',
    meaningRev: '自私自利、嫉妒心强、过度控制、情绪不稳、缺乏信心',
    imageUrl: '/img/权杖女王.jpg'
  },
  {
    id: 'wands_king',
    nameEn: 'King of Wands',
    nameCn: '权杖国王',
    type: 'minor',
    suit: 'wands',
    meaningUp: '领导才能、远见卓识、创业精神、果断决策、激励他人',
    meaningRev: '独裁专制、期望过高、冲动决策、缺乏远见、控制欲强',
    imageUrl: '/img/权杖国王.jpg'
  },

  // ============ 圣杯 (Cups) 14张 ============
  {
    id: 'cups_ace',
    nameEn: 'Ace of Cups',
    nameCn: '圣杯王牌',
    type: 'minor',
    suit: 'cups',
    meaningUp: '新的情感、爱的开始、直觉涌现、创造力、精神丰盈',
    meaningRev: '情感阻塞、爱的延迟、直觉压抑、情绪低落、空虚感',
    imageUrl: '/img/圣杯王牌.jpg'
  },
  {
    id: 'cups_2',
    nameEn: 'Two of Cups',
    nameCn: '圣杯二',
    type: 'minor',
    suit: 'cups',
    meaningUp: '爱情联结、伙伴关系、相互吸引、和谐统一、承诺约定',
    meaningRev: '关系失衡、沟通不畅、分离疏远、信任危机、单方付出',
    imageUrl: '/img/圣杯2.jpg'
  },
  {
    id: 'cups_3',
    nameEn: 'Three of Cups',
    nameCn: '圣杯三',
    type: 'minor',
    suit: 'cups',
    meaningUp: '欢庆聚会、友谊情谊、共同成就、社交活动、创意合作',
    meaningRev: '孤独疏离、过度放纵、八卦是非、合作破裂、庆祝过度',
    imageUrl: '/img/圣杯3.jpg'
  },
  {
    id: 'cups_4',
    nameEn: 'Four of Cups',
    nameCn: '圣杯四',
    type: 'minor',
    suit: 'cups',
    meaningUp: '内省冥想、不满现状、错过机会、情绪低落、重新评估',
    meaningRev: '接受机会、打破沉闷、重燃热情、行动起来、看清现实',
    imageUrl: '/img/圣杯4.jpg'
  },
  {
    id: 'cups_5',
    nameEn: 'Five of Cups',
    nameCn: '圣杯五',
    type: 'minor',
    suit: 'cups',
    meaningUp: '失落悲伤、悔恨遗憾、专注损失、情绪低谷、需要疗愈',
    meaningRev: '接受失去、向前看、找到希望、学会释怀、走出悲伤',
    imageUrl: '/img/圣杯5.jpg'
  },
  {
    id: 'cups_6',
    nameEn: 'Six of Cups',
    nameCn: '圣杯六',
    type: 'minor',
    suit: 'cups',
    meaningUp: '怀旧回忆、童年往事、纯真美好、故人重逢、善意赠予',
    meaningRev: '困于过去、不切实际、童年阴影、拒绝成长、乡愁过重',
    imageUrl: '/img/圣杯6.jpg'
  },
  {
    id: 'cups_7',
    nameEn: 'Seven of Cups',
    nameCn: '圣杯七',
    type: 'minor',
    suit: 'cups',
    meaningUp: '幻想选择、白日做梦、多种可能、想象丰富、诱惑迷惑',
    meaningRev: '做出选择、脚踏实地、看清现实、行动起来、专注目标',
    imageUrl: '/img/圣杯7.jpg'
  },
  {
    id: 'cups_8',
    nameEn: 'Eight of Cups',
    nameCn: '圣杯八',
    type: 'minor',
    suit: 'cups',
    meaningUp: '离开放下、寻求更高、情感疲惫、追寻真理、自我发现',
    meaningRev: '害怕离开、原地踏步、逃避问题、继续尝试、不愿放手',
    imageUrl: '/img/圣杯8.jpg'
  },
  {
    id: 'cups_9',
    nameEn: 'Nine of Cups',
    nameCn: '圣杯九',
    type: 'minor',
    suit: 'cups',
    meaningUp: '愿望成真、满足幸福、情感满足、享受成就、自我满足',
    meaningRev: '不满足感、物质主义、愿望落空、过度自满、内心空虚',
    imageUrl: '/img/圣杯9.jpg'
  },
  {
    id: 'cups_10',
    nameEn: 'Ten of Cups',
    nameCn: '圣杯十',
    type: 'minor',
    suit: 'cups',
    meaningUp: '幸福圆满、家庭和谐、情感完满、持久幸福、梦想成真',
    meaningRev: '家庭问题、关系破裂、不和谐、幻想破灭、缺乏归属',
    imageUrl: '/img/圣杯10.jpg'
  },
  {
    id: 'cups_page',
    nameEn: 'Page of Cups',
    nameCn: '圣杯侍者',
    type: 'minor',
    suit: 'cups',
    meaningUp: '情感消息、直觉敏锐、浪漫想法、创意灵感、童真纯净',
    meaningRev: '情绪不稳、创意阻塞、过于敏感、不切实际、消息延迟',
    imageUrl: '/img/圣杯侍者.jpg'
  },
  {
    id: 'cups_knight',
    nameEn: 'Knight of Cups',
    nameCn: '圣杯骑士',
    type: 'minor',
    suit: 'cups',
    meaningUp: '浪漫追求、理想主义、情感邀请、魅力感性、创意行动',
    meaningRev: '情绪化、不切实际、逃避现实、喜新厌旧、承诺困难',
    imageUrl: '/img/圣杯骑士.jpg'
  },
  {
    id: 'cups_queen',
    nameEn: 'Queen of Cups',
    nameCn: '圣杯女王',
    type: 'minor',
    suit: 'cups',
    meaningUp: '情感成熟、直觉智慧、关怀他人、内心平静、灵性连接',
    meaningRev: '情绪失控、过度敏感、情感依赖、缺乏边界、逃避现实',
    imageUrl: '/img/圣杯女王.jpg'
  },
  {
    id: 'cups_king',
    nameEn: 'King of Cups',
    nameCn: '圣杯国王',
    type: 'minor',
    suit: 'cups',
    meaningUp: '情感智慧、情绪平衡、外交手腕、慷慨仁慈、成熟稳重',
    meaningRev: '情绪压抑、操控他人、冷漠无情、情绪爆发、优柔寡断',
    imageUrl: '/img/圣杯国王.jpg'
  },

  // ============ 宝剑 (Swords) 14张 ============
  {
    id: 'swords_ace',
    nameEn: 'Ace of Swords',
    nameCn: '宝剑王牌',
    type: 'minor',
    suit: 'swords',
    meaningUp: '思维突破、真相揭示、新的想法、清晰洞察、胜利力量',
    meaningRev: '思维混乱、真相隐藏、误用力量、残酷冷漠、计划失败',
    imageUrl: '/img/宝剑王牌.jpg'
  },
  {
    id: 'swords_2',
    nameEn: 'Two of Swords',
    nameCn: '宝剑二',
    type: 'minor',
    suit: 'swords',
    meaningUp: '抉择困难、内心矛盾、暂时逃避、需要平衡、信息不足',
    meaningRev: '做出决定、信息显现、面对真相、偏向一方、解开僵局',
    imageUrl: '/img/宝剑2.jpg'
  },
  {
    id: 'swords_3',
    nameEn: 'Three of Swords',
    nameCn: '宝剑三',
    type: 'minor',
    suit: 'swords',
    meaningUp: '心痛悲伤、分离失去、背叛伤害、痛苦真相、悲伤释放',
    meaningRev: '走出伤痛、开始愈合、原谅释怀、乐观态度、压抑悲伤',
    imageUrl: '/img/宝剑3.jpg'
  },
  {
    id: 'swords_4',
    nameEn: 'Four of Swords',
    nameCn: '宝剑四',
    type: 'minor',
    suit: 'swords',
    meaningUp: '休息恢复、静心冥想、暂时退避、康复疗愈、精力恢复',
    meaningRev: '疲惫不堪、无法休息、重新行动、过度休息、不安焦虑',
    imageUrl: '/img/宝剑4.jpg'
  },
  {
    id: 'swords_5',
    nameEn: 'Five of Swords',
    nameCn: '宝剑五',
    type: 'minor',
    suit: 'swords',
    meaningUp: '冲突争斗、赢得战争、损人利己、紧张对立、输赢分明',
    meaningRev: '和解妥协、承认失败、放下争执、学会谦逊、避免冲突',
    imageUrl: '/img/宝剑5.jpg'
  },
  {
    id: 'swords_6',
    nameEn: 'Six of Swords',
    nameCn: '宝剑六',
    type: 'minor',
    suit: 'swords',
    meaningUp: '离开困境、过渡转变、前往平静、旅行移动、心灵疗愈',
    meaningRev: '无法离开、困在困境、抗拒改变、动荡不安、返回问题',
    imageUrl: '/img/宝剑6.jpg'
  },
  {
    id: 'swords_7',
    nameEn: 'Seven of Swords',
    nameCn: '宝剑七',
    type: 'minor',
    suit: 'swords',
    meaningUp: '策略行动、秘密计划、独自行事、欺骗背叛、机智应对',
    meaningRev: '真相暴露、坦白诚实、合作共事、自我欺骗、计划失败',
    imageUrl: '/img/宝剑7.jpg'
  },
  {
    id: 'swords_8',
    nameEn: 'Eight of Swords',
    nameCn: '宝剑八',
    type: 'minor',
    suit: 'swords',
    meaningUp: '受困无助、自我限制、思维束缚、无力感、等待救援',
    meaningRev: '打破束缚、自我解放、新的视角、重获力量、走出困境',
    imageUrl: '/img/宝剑8.jpg'
  },
  {
    id: 'swords_9',
    nameEn: 'Nine of Swords',
    nameCn: '宝剑九',
    type: 'minor',
    suit: 'swords',
    meaningUp: '焦虑恐惧、噩梦困扰、忧虑过度、精神压力、自我折磨',
    meaningRev: '走出恐惧、寻求帮助、事情好转、过度担忧、压抑焦虑',
    imageUrl: '/img/宝剑9.jpg'
  },
  {
    id: 'swords_10',
    nameEn: 'Ten of Swords',
    nameCn: '宝剑十',
    type: 'minor',
    suit: 'swords',
    meaningUp: '痛苦结束、最糟时刻、背叛终结、新的开始、彻底失败',
    meaningRev: '开始恢复、最坏已过、不愿放手、抗拒结束、痛苦延续',
    imageUrl: '/img/宝剑10.jpg'
  },
  {
    id: 'swords_page',
    nameEn: 'Page of Swords',
    nameCn: '宝剑侍者',
    type: 'minor',
    suit: 'swords',
    meaningUp: '好奇心强、新的想法、真相追寻、机警敏锐、消息传递',
    meaningRev: '八卦是非、冷嘲热讽、思维混乱、沟通障碍、缺乏计划',
    imageUrl: '/img/宝剑侍者.jpg'
  },
  {
    id: 'swords_knight',
    nameEn: 'Knight of Swords',
    nameCn: '宝剑骑士',
    type: 'minor',
    suit: 'swords',
    meaningUp: '快速行动、思维敏捷、直言不讳、追求真相、果断决绝',
    meaningRev: '鲁莽冲动、言语伤人、缺乏方向、固执己见、仓促决定',
    imageUrl: '/img/宝剑骑士.jpg'
  },
  {
    id: 'swords_queen',
    nameEn: 'Queen of Swords',
    nameCn: '宝剑女王',
    type: 'minor',
    suit: 'swords',
    meaningUp: '独立理性、直言不讳、经验智慧、清晰界限、公正判断',
    meaningRev: '过于冷漠、尖酸刻薄、情感压抑、判断失误、过于挑剔',
    imageUrl: '/img/宝剑女王.jpg'
  },
  {
    id: 'swords_king',
    nameEn: 'King of Swords',
    nameCn: '宝剑国王',
    type: 'minor',
    suit: 'swords',
    meaningUp: '智慧权威、公正判断、思维清晰、道德标准、真相追求',
    meaningRev: '权力滥用、冷酷无情、独断专行、操控他人、思维偏执',
    imageUrl: '/img/宝剑国王.jpg'
  },

  // ============ 星币 (Pentacles) 14张 ============
  {
    id: 'pentacles_ace',
    nameEn: 'Ace of Pentacles',
    nameCn: '星币王牌',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '新的机会、财务开始、物质基础、种子播种、潜力发展',
    meaningRev: '错失机会、财务延迟、缺乏规划、基础不稳、贪婪执念',
    imageUrl: '/img/星币王牌.jpg'
  },
  {
    id: 'pentacles_2',
    nameEn: 'Two of Pentacles',
    nameCn: '星币二',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '平衡多任务、灵活适应、资源调配、优先排序、时间管理',
    meaningRev: '失去平衡、过度忙碌、优先混乱、财务压力、无法应对',
    imageUrl: '/img/星币2.jpg'
  },
  {
    id: 'pentacles_3',
    nameEn: 'Three of Pentacles',
    nameCn: '星币三',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '团队合作、技能展示、质量认可、学习成长、建设项目',
    meaningRev: '缺乏团队、工作不认可、质量问题、学习困难、合作障碍',
    imageUrl: '/img/星币3.jpg'
  },
  {
    id: 'pentacles_4',
    nameEn: 'Four of Pentacles',
    nameCn: '星币四',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '财务安全、保守守成、控制资源、物质稳定、节俭储蓄',
    meaningRev: '过度守财、贪婪吝啬、失去控制、物质执念、财务损失',
    imageUrl: '/img/星币4.jpg'
  },
  {
    id: 'pentacles_5',
    nameEn: 'Five of Pentacles',
    nameCn: '星币五',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '财务困难、贫困匮乏、被排斥感、健康问题、艰难时期',
    meaningRev: '走出困境、接受帮助、财务恢复、精神富足、找到希望',
    imageUrl: '/img/星币5.jpg'
  },
  {
    id: 'pentacles_6',
    nameEn: 'Six of Pentacles',
    nameCn: '星币六',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '慷慨给予、资源分享、公平交换、接受帮助、财务平衡',
    meaningRev: '不公平待遇、有条件给予、债务问题、施舍心态、资源失衡',
    imageUrl: '/img/星币6.jpg'
  },
  {
    id: 'pentacles_7',
    nameEn: 'Seven of Pentacles',
    nameCn: '星币七',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '耐心等待、评估进展、长期投资、审视成果、暂时休息',
    meaningRev: '缺乏耐心、投资失误、收获不足、浪费资源、方向迷失',
    imageUrl: '/img/星币7.jpg'
  },
  {
    id: 'pentacles_8',
    nameEn: 'Eight of Pentacles',
    nameCn: '星币八',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '技能精进、勤奋工作、专注细节、学徒精神、持续努力',
    meaningRev: '缺乏专注、技能不足、工作倦怠、追求完美、敷衍了事',
    imageUrl: '/img/星币8.jpg'
  },
  {
    id: 'pentacles_9',
    nameEn: 'Nine of Pentacles',
    nameCn: '星币九',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '丰盈自足、独立成功、享受成果、自我价值、优雅生活',
    meaningRev: '财务依赖、过度工作、表面光鲜、缺乏自信、安全感缺失',
    imageUrl: '/img/星币9.jpg'
  },
  {
    id: 'pentacles_10',
    nameEn: 'Ten of Pentacles',
    nameCn: '星币十',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '家族财富、代际传承、长久稳定、物质丰盈、传统根基',
    meaningRev: '家族问题、财务纠纷、传承中断、物质损失、缺乏归属',
    imageUrl: '/img/星币10.jpg'
  },
  {
    id: 'pentacles_page',
    nameEn: 'Page of Pentacles',
    nameCn: '星币侍者',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '新的机遇、学习开始、实际目标、脚踏实地、财务消息',
    meaningRev: '缺乏专注、计划不切实际、机会错失、懒惰拖延、消息延迟',
    imageUrl: '/img/星币侍者.jpg'
  },
  {
    id: 'pentacles_knight',
    nameEn: 'Knight of Pentacles',
    nameCn: '星币骑士',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '勤勉可靠、稳健前进、耐心持久、实际行动、责任心强',
    meaningRev: '过于保守、固执己见、工作狂、缺乏进展、懒惰拖延',
    imageUrl: '/img/星币骑士.jpg'
  },
  {
    id: 'pentacles_queen',
    nameEn: 'Queen of Pentacles',
    nameCn: '星币女王',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '务实能干、慷慨滋养、财务独立、家庭关怀、生活富足',
    meaningRev: '过度物质、工作家庭失衡、自我忽视、财务焦虑、依赖他人',
    imageUrl: '/img/星币女王.jpg'
  },
  {
    id: 'pentacles_king',
    nameEn: 'King of Pentacles',
    nameCn: '星币国王',
    type: 'minor',
    suit: 'pentacles',
    meaningUp: '财富成功、商业头脑、稳健领导、物质安全、慷慨大方',
    meaningRev: '过于物质、贪婪守财、商业失败、控制欲强、缺乏远见',
    imageUrl: '/img/星币国王.jpg'
  }
]

// 牌背图片路径
export const CARD_BACK_IMAGE = '/img/普及版背面.jpg'

// 根据ID获取卡牌
export function getCardById(id: string): TarotCard | undefined {
  return TAROT_CARDS.find(card => card.id === id)
}

// 获取大阿卡纳牌
export function getMajorArcana(): TarotCard[] {
  return TAROT_CARDS.filter(card => card.type === 'major')
}

// 获取小阿卡纳牌
export function getMinorArcana(): TarotCard[] {
  return TAROT_CARDS.filter(card => card.type === 'minor')
}

// 根据花色获取牌
export function getCardsBySuit(suit: string): TarotCard[] {
  return TAROT_CARDS.filter(card => card.suit === suit)
}
