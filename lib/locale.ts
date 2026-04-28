export type Locale = "zh" | "en" | "ko";

export const DEFAULT_LOCALE: Locale = "zh";
export const LOCALE_STORAGE_KEY = "nct-cp-locale";

export const isLocale = (value: unknown): value is Locale =>
  value === "zh" || value === "en" || value === "ko";

export const pickLocalizedText = (
  locale: Locale,
  zh: string,
  en?: string | null,
  ko?: string | null,
) => {
  if (locale === "en") {
    return en ?? zh;
  }

  if (locale === "ko") {
    return ko ?? zh;
  }

  return zh;
};

export const pickLocalizedList = (
  locale: Locale,
  zh: readonly string[],
  en?: readonly string[] | null,
  ko?: readonly string[] | null,
) => {
  if (locale === "en") {
    return en ?? zh;
  }

  if (locale === "ko") {
    return ko ?? zh;
  }

  return zh;
};

const UI_TEXT = {
  siteTitle: {
    zh: "NCT CP Test",
    en: "NCT CP Test",
    ko: "NCT CP Test",
  },
  siteSubtitle: {
    zh: "NCT CP Test",
    en: "NCT CP Test",
    ko: "NCT CP Test",
  },
  startTest: {
    zh: "开始测试",
    en: "Start Test",
    ko: "테스트 시작",
  },
  openingTest: {
    zh: "正在进入测试…",
    en: "Opening the test…",
    ko: "테스트로 이동하는 중…",
  },
  backHome: {
    zh: "返回首页",
    en: "Back Home",
    ko: "홈으로",
  },
  previous: {
    zh: "上一题",
    en: "Previous",
    ko: "이전",
  },
  next: {
    zh: "下一题",
    en: "Next",
    ko: "다음",
  },
  viewResult: {
    zh: "查看结果",
    en: "View Result",
    ko: "결과 보기",
  },
  generatingResult: {
    zh: "正在匹配你的 CP 人格…",
    en: "Finding your CP type…",
    ko: "나의 CP 타입을 찾는 중…",
  },
  retakeTest: {
    zh: "重新测试",
    en: "Retake Test",
    ko: "다시 테스트하기",
  },
  yourCpType: {
    zh: "你的 CP 人格是",
    en: "Your CP type is",
    ko: "당신의 CP 타입은",
  },
  yourRelationshipGuide: {
    zh: "你的关系说明书",
    en: "Your Relationship Guide",
    ko: "나의 관계 설명서",
  },
  quickRead: {
    zh: "类型速读",
    en: "Quick Read",
    ko: "타입 한눈에 보기",
  },
  quickReadDescription: {
    zh: "一眼看懂你会被什么打动，又适合怎样的关系。",
    en: "A quick glance at what pulls you in and what kind of relationship fits you best.",
    ko: "무엇에 끌리고 어떤 관계가 잘 맞는지 한눈에 볼 수 있어요.",
  },
  relationshipBase: {
    zh: "关系底色",
    en: "Relationship core",
    ko: "관계 분위기",
  },
  whatAttractsYou: {
    zh: "心动点",
    en: "What attracts you",
    ko: "끌리는 포인트",
  },
  howYouShowAffection: {
    zh: "表达方式",
    en: "How you show affection",
    ko: "애정 표현 방식",
  },
  relationshipPace: {
    zh: "相处节奏",
    en: "Relationship pace",
    ko: "관계 속도",
  },
  conflictPattern: {
    zh: "冲突模式",
    en: "Conflict pattern",
    ko: "갈등 패턴",
  },
  securityNeeds: {
    zh: "安全感来源",
    en: "Security needs",
    ko: "안정감을 느끼는 방식",
  },
  redFlags: {
    zh: "关系雷区",
    en: "Red flags",
    ko: "주의할 점",
  },
  idealScenes: {
    zh: "适合场景",
    en: "Ideal scenes",
    ko: "어울리는 장면",
  },
  similarTypes: {
    zh: "和你同频的其他类型",
    en: "Similar types",
    ko: "나와 잘 맞는 다른 타입",
  },
  similarTypesDescription: {
    zh: "这些类型也可能让你觉得顺、熟、好靠近。",
    en: "These types may also feel natural, familiar, and easy to get close to.",
    ko: "이 타입들도 편하고 익숙하게 느껴질 수 있어요.",
  },
  atlasTitle: {
    zh: "结果图鉴",
    en: "Result Atlas",
    ko: "결과 도감",
  },
  atlasDescription: {
    zh: "先看看所有可能结果，再开始测试也可以。",
    en: "Browse the possible results before starting the test.",
    ko: "가능한 결과를 먼저 둘러보고 테스트를 시작해도 좋아요.",
  },
  restoringProgress: {
    zh: "正在恢复答题进度…",
    en: "Restoring your progress…",
    ko: "이전 답변을 불러오는 중…",
  },
  homeLead: {
    zh: "测测你的",
    en: "Find Your",
    ko: "나의 NCT CP",
  },
  homeHighlight: {
    zh: "NCT CP 人格",
    en: "NCT CP Type",
    ko: "타입 찾기",
  },
  homeDescription: {
    zh: "看看你会走向哪种陪伴感、偏爱方式和相处节奏。",
    en: "See what kind of closeness, devotion, and relationship rhythm you are drawn to.",
    ko: "어떤 관계의 온도와 애정 방식, 그리고 리듬에 끌리는지 알아보세요.",
  },
  aboutMinutes: {
    zh: "约 3 分钟",
    en: "About 3 min",
    ko: "약 3분",
  },
  disclaimer: {
    zh: "仅供娱乐，不代表真实成员关系立场。",
    en: "For fun only. Not a statement about real member relationships.",
    ko: "재미로만 즐겨 주세요. 실제 멤버 관계에 대한 입장을 뜻하지 않아요.",
  },
  languageSwitcher: {
    zh: "切换语言",
    en: "Change language",
    ko: "언어 변경",
  },
  loadingResultPoster: {
    zh: "正在努力加载结果海报…",
    en: "Loading your result poster…",
    ko: "결과 포스터를 불러오는 중…",
  },
  loadingPosterThumb: {
    zh: "海报加载中…",
    en: "Loading poster…",
    ko: "포스터 불러오는 중…",
  },
  resultPosterLoadFailed: {
    zh: "图片加载失败",
    en: "Failed to load image",
    ko: "이미지를 불러오지 못했어요",
  },
  atlasScrollHint: {
    zh: "下滑查看 15 种 CP 结果图鉴",
    en: "Scroll to view all 15 CP result types",
    ko: "아래로 내려 15가지 CP 결과 유형 보기",
  },
} as const;

export type UiTextKey = keyof typeof UI_TEXT;

export const getUiText = (key: UiTextKey, locale: Locale) =>
  pickLocalizedText(locale, UI_TEXT[key].zh, UI_TEXT[key].en, UI_TEXT[key].ko);

export const formatQuestionProgress = (
  locale: Locale,
  current: number,
  total: number,
) =>
  locale === "en"
    ? `Question ${current} of ${total}`
    : locale === "ko"
      ? `질문 ${current} / ${total}`
      : `第 ${current} / ${total} 题`;

export const formatProgressAriaLabel = (
  locale: Locale,
  current: number,
  total: number,
) =>
  locale === "en"
    ? `Completed ${current} of ${total} questions`
    : locale === "ko"
      ? `총 ${total}문항 중 ${current}문항 완료`
      : `当前已完成 ${current} / ${total} 题`;

export const formatPairCount = (locale: Locale, count: number) =>
  locale === "en"
    ? `${count} pairings`
    : locale === "ko"
      ? `${count}개 CP`
      : `${count} 对 CP`;

export const formatAtlasSubtitle = (locale: Locale, count: number) =>
  locale === "en"
    ? `A quick look at ${count} CP relationship types`
    : locale === "ko"
      ? `${count}가지 CP 관계 유형 미리보기`
      : `${count} 种 CP 关系类型速览`;

export const getPosterAltText = (locale: Locale, pair: string) =>
  locale === "en"
    ? `${pair} result poster`
    : locale === "ko"
      ? `${pair} 결과 이미지`
      : `${pair} 结果图`;

export const getIllustrationAltText = (locale: Locale, pair: string) =>
  locale === "en"
    ? `${pair} original CP personality illustration`
    : locale === "ko"
      ? `${pair} 오리지널 CP 성향 일러스트`
      : `${pair} 原创 CP 人格插画`;
