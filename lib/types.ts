import type { PairProfileSource } from "@/data/pair-profiles";
import { RESULT_IDS, TRAIT_TAGS } from "@/data/pair-profiles";

export type ResultId = (typeof RESULT_IDS)[number];
export type TraitTag = (typeof TRAIT_TAGS)[number];

export type ScoreMap = Record<ResultId, number>;
export type TraitScoreMap = Record<TraitTag, number>;
export type QuizAnswers = Record<string, string>;

export interface ResultPalette {
  accent: string;
  accentSoft: string;
  accentAlt: string;
  line: string;
}

export interface ResultIllustration {
  pose: "side-by-side" | "lean-in" | "mirror" | "orbit";
  accessory: "spark" | "ribbon" | "halo" | "bookmark" | "star" | "leaf";
  concept: string;
}

export type ResultProfile = PairProfileSource & {
  typeNameEn?: string;
  typeNameKo?: string;
  oneLineEn?: string;
  oneLineKo?: string;
  narrativeEn?: string;
  narrativeKo?: string;
  coreVibeEn?: readonly string[];
  coreVibeKo?: readonly string[];
  attractionStyleEn?: readonly string[];
  attractionStyleKo?: readonly string[];
  relationshipTempoEn?: readonly string[];
  relationshipTempoKo?: readonly string[];
  affectionStyleEn?: readonly string[];
  affectionStyleKo?: readonly string[];
  conflictStyleEn?: readonly string[];
  conflictStyleKo?: readonly string[];
  securityNeedEn?: readonly string[];
  securityNeedKo?: readonly string[];
  weakPointsEn?: readonly string[];
  weakPointsKo?: readonly string[];
  idealDateEn?: readonly string[];
  idealDateKo?: readonly string[];
  scoringHintsEn?: readonly string[];
  members: [string, string];
  imagePath: string;
  palette: ResultPalette;
  illustration: ResultIllustration;
};

export type OptionWeights = Partial<Record<TraitTag, number>>;

export interface QuizOption {
  id: string;
  label: string;
  labelEn?: string;
  labelKo?: string;
  note?: string;
  noteEn?: string;
  noteKo?: string;
  weights: OptionWeights;
}

export interface QuizQuestion {
  id: string;
  category: "social" | "emotion" | "conflict" | "affection" | "rhythm";
  prompt: string;
  promptEn?: string;
  promptKo?: string;
  options: [QuizOption, QuizOption, QuizOption, QuizOption];
}

export interface RankedResult {
  result: ResultProfile;
  score: number;
  matchedTraits: TraitTag[];
}

export interface QuizComputation {
  result: ResultProfile;
  ranking: RankedResult[];
  scores: ScoreMap;
  traitScores: TraitScoreMap;
  answeredCount: number;
  totalQuestions: number;
}

export interface StoredQuizState {
  answers: QuizAnswers;
  currentIndex: number;
  resultId: ResultId | null;
  startedAt: string | null;
  updatedAt: string | null;
}
