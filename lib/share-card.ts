import type { ResultId } from "@/lib/types";

export const getResultPosterPath = (resultId: ResultId | string) =>
  `/results/${resultId}.png`;

export const getResultPosterThumbPath = (resultId: ResultId | string) =>
  `/results/thumbs/${resultId}.webp`;
