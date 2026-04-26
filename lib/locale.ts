export type Locale = "zh" | "en";

export const DEFAULT_LOCALE: Locale = "zh";
export const LOCALE_STORAGE_KEY = "nct-cp-locale";

export const isLocale = (value: unknown): value is Locale =>
  value === "zh" || value === "en";

export const pickLocalizedText = (
  locale: Locale,
  zh: string,
  en?: string | null,
) => (locale === "en" ? en ?? zh : zh);

export const pickLocalizedList = (
  locale: Locale,
  zh: readonly string[],
  en?: readonly string[] | null,
) => (locale === "en" ? en ?? zh : zh);

const UI_TEXT = {
  siteTitle: {
    zh: "NCT CP 人格测试",
    en: "NCT CP Personality Test",
  },
  siteSubtitle: {
    zh: "NCT CP Test",
    en: "NCT CP Test",
  },
  startTest: {
    zh: "开始测试",
    en: "Start Test",
  },
  backHome: {
    zh: "返回首页",
    en: "Back Home",
  },
  previous: {
    zh: "上一题",
    en: "Previous",
  },
  next: {
    zh: "下一题",
    en: "Next",
  },
  viewResult: {
    zh: "查看结果",
    en: "View Result",
  },
  generatingResult: {
    zh: "生成结果中…",
    en: "Generating Result…",
  },
  saveImage: {
    zh: "保存结果图",
    en: "Save Poster",
  },
  retakeTest: {
    zh: "重新测试",
    en: "Retake Test",
  },
  returning: {
    zh: "返回中…",
    en: "Returning…",
  },
  yourCpType: {
    zh: "你的 CP 人格是",
    en: "Your CP type is",
  },
  yourRelationshipGuide: {
    zh: "你的关系说明书",
    en: "Your Relationship Guide",
  },
  quickRead: {
    zh: "类型速读",
    en: "Quick Read",
  },
  quickReadDescription: {
    zh: "一眼看懂你会被什么打动，又适合怎样的关系。",
    en: "A quick glance at what pulls you in and what kind of relationship fits you best.",
  },
  relationshipBase: {
    zh: "关系底色",
    en: "Relationship core",
  },
  whatAttractsYou: {
    zh: "心动点",
    en: "What attracts you",
  },
  howYouShowAffection: {
    zh: "表达方式",
    en: "How you show affection",
  },
  relationshipPace: {
    zh: "相处节奏",
    en: "Relationship pace",
  },
  conflictPattern: {
    zh: "冲突模式",
    en: "Conflict pattern",
  },
  securityNeeds: {
    zh: "安全感来源",
    en: "Security needs",
  },
  redFlags: {
    zh: "关系雷区",
    en: "Red flags",
  },
  idealScenes: {
    zh: "适合场景",
    en: "Ideal scenes",
  },
  similarTypes: {
    zh: "和你同频的其他类型",
    en: "Similar types",
  },
  similarTypesDescription: {
    zh: "这些类型也可能让你觉得顺、熟、好靠近。",
    en: "These types may also feel natural, familiar, and easy to get close to.",
  },
  atlasTitle: {
    zh: "结果图鉴",
    en: "Result Atlas",
  },
  atlasDescription: {
    zh: "先看看所有可能结果，再开始测试也可以。",
    en: "Browse the possible results before starting the test.",
  },
  downloadStarted: {
    zh: "结果海报已开始下载。",
    en: "Your poster has started downloading.",
  },
  downloadFailed: {
    zh: "保存失败，请稍后重试。",
    en: "Failed to save image. Please try again.",
  },
  restoringProgress: {
    zh: "正在恢复答题进度…",
    en: "Restoring your progress…",
  },
  homeLead: {
    zh: "测测你的",
    en: "Discover Your",
  },
  homeHighlight: {
    zh: "NCT CP 人格",
    en: "NCT CP Type",
  },
  homeDescription: {
    zh: "看看你会走向哪种陪伴感、偏爱方式和相处节奏。",
    en: "See what kind of closeness, devotion, and relationship rhythm you are drawn to.",
  },
  aboutMinutes: {
    zh: "约 3 分钟",
    en: "About 3 min",
  },
  disclaimer: {
    zh: "仅供娱乐，不代表真实成员关系立场。",
    en: "For fun only. Not a statement about real member relationships.",
  },
  languageSwitcher: {
    zh: "切换语言",
    en: "Change language",
  },
} as const;

export type UiTextKey = keyof typeof UI_TEXT;

export const getUiText = (key: UiTextKey, locale: Locale) =>
  pickLocalizedText(locale, UI_TEXT[key].zh, UI_TEXT[key].en);

export const formatQuestionProgress = (
  locale: Locale,
  current: number,
  total: number,
) =>
  locale === "en" ? `Question ${current} of ${total}` : `第 ${current} / ${total} 题`;

export const formatProgressAriaLabel = (
  locale: Locale,
  current: number,
  total: number,
) =>
  locale === "en"
    ? `Completed ${current} of ${total} questions`
    : `当前已完成 ${current} / ${total} 题`;

export const formatPairCount = (locale: Locale, count: number) =>
  locale === "en" ? `${count} pairings` : `${count} 对 CP`;

export const formatAtlasSubtitle = (locale: Locale, count: number) =>
  locale === "en"
    ? `A quick look at ${count} CP relationship types`
    : `${count} 种 CP 关系类型速览`;

export const getPosterAltText = (locale: Locale, pair: string) =>
  locale === "en" ? `${pair} result poster` : `${pair} 结果图`;

export const getIllustrationAltText = (locale: Locale, pair: string) =>
  locale === "en"
    ? `${pair} original CP personality illustration`
    : `${pair} 原创 CP 人格插画`;
