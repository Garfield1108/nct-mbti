import type { ResultId } from "@/lib/types";

export const getResultPosterSrc = (resultId: ResultId | string) =>
  `/results/${resultId}.png`;

export const getResultThumbSrc = (resultId: ResultId | string) =>
  `/results/thumbs/${resultId}.webp`;

export const getResultDisplayPosterSrc = (resultId: ResultId | string) =>
  `/results/webp/${resultId}.webp`;

export const getResultPosterPath = getResultPosterSrc;
export const getResultPosterThumbPath = getResultThumbSrc;
