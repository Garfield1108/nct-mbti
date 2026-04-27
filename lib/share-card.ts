import type { ResultId } from "@/lib/types";

export const getResultPosterPath = (resultId: ResultId | string) =>
  `/results/${resultId}.png`;
