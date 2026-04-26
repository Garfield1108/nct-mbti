import { QUESTIONS } from "@/data/questions";
import { RESULTS } from "@/data/results";
import { RESULT_IDS, TRAIT_TAGS } from "@/data/pair-profiles";
import type {
  OptionWeights,
  QuizAnswers,
  QuizComputation,
  QuizQuestion,
  RankedResult,
  ResultProfile,
  ScoreMap,
  TraitScoreMap,
  TraitTag,
} from "@/lib/types";

const QUESTION_TRAIT_NORMALIZATION_EXPONENT = 0.25;
const RESULT_TRAIT_COMMONNESS_EXPONENT = 0.15;

const buildQuestionTraitFrequencyMap = (
  questions: QuizQuestion[] = QUESTIONS,
): TraitScoreMap => {
  const frequency = createTraitScoreMap();

  for (const question of questions) {
    for (const option of question.options) {
      for (const trait of Object.keys(option.weights) as TraitTag[]) {
        frequency[trait] += 1;
      }
    }
  }

  return frequency;
};

const buildResultTraitFrequencyMap = (
  results: ResultProfile[] = RESULTS,
): TraitScoreMap => {
  const frequency = createTraitScoreMap();

  for (const result of results) {
    for (const trait of result.scoringHints) {
      frequency[trait] += 1;
    }
  }

  return frequency;
};

const createTraitScoreMap = (): TraitScoreMap =>
  Object.fromEntries(TRAIT_TAGS.map((trait) => [trait, 0])) as TraitScoreMap;

const createScoreMap = (): ScoreMap =>
  Object.fromEntries(RESULT_IDS.map((id) => [id, 0])) as ScoreMap;

const QUESTION_TRAIT_FREQUENCY = buildQuestionTraitFrequencyMap();
const RESULT_TRAIT_FREQUENCY = buildResultTraitFrequencyMap();

const getQuestionTraitWeight = (trait: TraitTag) =>
  QUESTION_TRAIT_FREQUENCY[trait] ** QUESTION_TRAIT_NORMALIZATION_EXPONENT;

const getResultTraitWeight = (trait: TraitTag) =>
  RESULT_TRAIT_FREQUENCY[trait] ** RESULT_TRAIT_COMMONNESS_EXPONENT;

const getTraitContribution = (
  traitScores: TraitScoreMap,
  trait: TraitTag,
) => traitScores[trait] / getResultTraitWeight(trait);

const getSpecificityScore = (matchedTraits: TraitTag[]) =>
  matchedTraits.reduce(
    (total, trait) => total + 1 / RESULT_TRAIT_FREQUENCY[trait],
    0,
  );

const applyWeights = (traitScores: TraitScoreMap, weights: OptionWeights) => {
  for (const [trait, score] of Object.entries(weights) as [TraitTag, number][]) {
    traitScores[trait] += score / getQuestionTraitWeight(trait);
  }
};

const findOptionWeights = (
  question: QuizQuestion,
  optionId: string | undefined,
): OptionWeights | null => {
  if (!optionId) {
    return null;
  }

  const option = question.options.find((item) => item.id === optionId);
  return option?.weights ?? null;
};

const getMatchedTraits = (
  result: ResultProfile,
  traitScores: TraitScoreMap,
): TraitTag[] =>
  [...result.scoringHints]
    .filter((trait) => traitScores[trait] > 0)
    .sort((left, right) => {
      const byScore = traitScores[right] - traitScores[left];
      if (byScore !== 0) {
        return byScore;
      }

      return left.localeCompare(right, "zh-Hans-CN");
    });

const getPeakTraitScore = (
  matchedTraits: TraitTag[],
  traitScores: TraitScoreMap,
) =>
  Math.max(
    0,
    ...matchedTraits.map((trait) => getTraitContribution(traitScores, trait)),
  );

export const countAnsweredQuestions = (
  answers: QuizAnswers,
  questions: QuizQuestion[] = QUESTIONS,
) => questions.filter((question) => Boolean(answers[question.id])).length;

export const isQuizComplete = (
  answers: QuizAnswers,
  questions: QuizQuestion[] = QUESTIONS,
) => countAnsweredQuestions(answers, questions) === questions.length;

export const calculateTraitScores = (
  answers: QuizAnswers,
  questions: QuizQuestion[] = QUESTIONS,
): TraitScoreMap => {
  const traitScores = createTraitScoreMap();

  for (const question of questions) {
    const optionWeights = findOptionWeights(question, answers[question.id]);
    if (!optionWeights) {
      continue;
    }

    applyWeights(traitScores, optionWeights);
  }

  return traitScores;
};

export const calculateScores = (
  traitScores: TraitScoreMap,
  results: ResultProfile[] = RESULTS,
): ScoreMap => {
  const scores = createScoreMap();

  for (const result of results) {
    scores[result.id] = result.scoringHints.reduce(
      (total, trait) => total + getTraitContribution(traitScores, trait),
      0,
    );
  }

  return scores;
};

export const rankResults = (
  traitScores: TraitScoreMap,
  results: ResultProfile[] = RESULTS,
): RankedResult[] =>
  results
    .map((result) => {
      const matchedTraits = getMatchedTraits(result, traitScores);
      const score = result.scoringHints.reduce((total, trait) => {
        return total + getTraitContribution(traitScores, trait);
      }, 0);

      return {
        result,
        score,
        matchedTraits,
      };
    })
    .sort((left, right) => {
      const byScore = right.score - left.score;
      if (byScore !== 0) {
        return byScore;
      }

      const byCoverage = right.matchedTraits.length - left.matchedTraits.length;
      if (byCoverage !== 0) {
        return byCoverage;
      }

      const byPeak =
        getPeakTraitScore(right.matchedTraits, traitScores) -
        getPeakTraitScore(left.matchedTraits, traitScores);
      if (byPeak !== 0) {
        return byPeak;
      }

      const bySpecificity =
        getSpecificityScore(right.matchedTraits) -
        getSpecificityScore(left.matchedTraits);
      if (bySpecificity !== 0) {
        return bySpecificity;
      }

      return left.result.typeName.localeCompare(
        right.result.typeName,
        "zh-Hans-CN",
      );
    });

export const computeQuizResult = (
  answers: QuizAnswers,
  questions: QuizQuestion[] = QUESTIONS,
  results: ResultProfile[] = RESULTS,
): QuizComputation => {
  const traitScores = calculateTraitScores(answers, questions);
  const ranking = rankResults(traitScores, results);

  return {
    result: ranking[0].result,
    ranking,
    scores: calculateScores(traitScores, results),
    traitScores,
    answeredCount: countAnsweredQuestions(answers, questions),
    totalQuestions: questions.length,
  };
};
