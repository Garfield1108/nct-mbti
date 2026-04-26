import { RESULT_IDS } from "@/data/pair-profiles";
import { QUESTIONS } from "@/data/questions";
import type { QuizAnswers, StoredQuizState } from "@/lib/types";

const STORAGE_KEY = "nct-cp-mbti.quiz-state";
const STORAGE_VERSION = 2;

type PersistedQuizState = StoredQuizState & {
  version: number;
};

const QUESTION_IDS = new Set(QUESTIONS.map((question) => question.id));
const QUESTION_OPTIONS = new Map(
  QUESTIONS.map((question) => [
    question.id,
    new Set(question.options.map((option) => option.id)),
  ]),
);
const RESULT_ID_SET = new Set<string>(RESULT_IDS);

export const createEmptyQuizState = (): StoredQuizState => ({
  answers: {},
  currentIndex: 0,
  resultId: null,
  startedAt: null,
  updatedAt: null,
});

const isBrowser = () => typeof window !== "undefined";

const removeStoredQuizState = () => {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
};

const sanitizeAnswers = (answers: unknown): QuizAnswers => {
  if (!answers || typeof answers !== "object") {
    return {};
  }

  const nextAnswers: QuizAnswers = {};

  for (const [questionId, optionId] of Object.entries(answers)) {
    if (!QUESTION_IDS.has(questionId) || typeof optionId !== "string") {
      continue;
    }

    const availableOptions = QUESTION_OPTIONS.get(questionId);
    if (!availableOptions?.has(optionId)) {
      continue;
    }

    nextAnswers[questionId] = optionId;
  }

  return nextAnswers;
};

const getSafeTimestamp = (value: unknown) =>
  typeof value === "string" ? value : null;

const getSafeCurrentIndex = (value: unknown) => {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return 0;
  }

  return Math.min(
    Math.max(0, Math.floor(value)),
    Math.max(QUESTIONS.length - 1, 0),
  );
};

const getSafeResultId = (value: unknown): StoredQuizState["resultId"] =>
  typeof value === "string" && RESULT_ID_SET.has(value)
    ? (value as StoredQuizState["resultId"])
    : null;

const normalizeQuizState = (
  parsed: Partial<PersistedQuizState> & { resultSlug?: string | null },
): StoredQuizState | null => {
  if (parsed.version !== STORAGE_VERSION) {
    return null;
  }

  const answers = sanitizeAnswers(parsed.answers);
  const fallbackResultId = getSafeResultId(parsed.resultSlug);
  const resultId = getSafeResultId(parsed.resultId) ?? fallbackResultId;

  return {
    answers,
    currentIndex: getSafeCurrentIndex(parsed.currentIndex),
    resultId:
      resultId && Object.keys(answers).length === QUESTIONS.length
        ? resultId
        : null,
    startedAt: getSafeTimestamp(parsed.startedAt),
    updatedAt: getSafeTimestamp(parsed.updatedAt),
  };
};

export const shouldStartFreshQuiz = (state: StoredQuizState | null) =>
  !state ||
  state.resultId !== null ||
  Object.keys(state.answers).length === QUESTIONS.length;

export const loadQuizState = (): StoredQuizState | null => {
  if (!isBrowser()) {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<PersistedQuizState> & {
      resultSlug?: string | null;
    };
    const normalizedState = normalizeQuizState(parsed);

    if (!normalizedState) {
      removeStoredQuizState();
      return null;
    }

    return normalizedState;
  } catch {
    removeStoredQuizState();
    return null;
  }
};

export const saveQuizState = (state: StoredQuizState) => {
  if (!isBrowser()) {
    return;
  }

  const persistedState: PersistedQuizState = {
    ...state,
    version: STORAGE_VERSION,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedState));
};

export const persistQuizProgress = (
  answers: QuizAnswers,
  currentIndex: number,
  previousState: StoredQuizState | null,
) => {
  const nextState: StoredQuizState = {
    answers,
    currentIndex,
    resultId: previousState?.resultId ?? null,
    startedAt: previousState?.startedAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveQuizState(nextState);
  return nextState;
};

export const saveQuizResult = (
  resultId: StoredQuizState["resultId"],
  answers: QuizAnswers,
  currentIndex: number,
  previousState: StoredQuizState | null,
) => {
  const nextState: StoredQuizState = {
    answers,
    currentIndex,
    resultId,
    startedAt: previousState?.startedAt ?? new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  saveQuizState(nextState);
  return nextState;
};

export const clearQuizState = () => {
  removeStoredQuizState();
};
