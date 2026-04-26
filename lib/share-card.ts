import type { Locale } from "@/lib/locale";
import type { ResultId } from "@/lib/types";

export const getResultPosterPath = (resultId: ResultId | string) =>
  `/results/${resultId}.png`;

export const getLocalizedResultPosterPath = ({
  resultId,
  locale,
  hasEnglishPoster = false,
}: {
  resultId: ResultId | string;
  locale: Locale;
  hasEnglishPoster?: boolean;
}) =>
  locale === "en" && hasEnglishPoster
    ? `/results/en/${resultId}.png`
    : getResultPosterPath(resultId);

export async function downloadResultPoster(resultId: ResultId | string) {
  const imageUrl = getResultPosterPath(resultId);
  const response = await fetch(imageUrl);

  if (!response.ok) {
    throw new Error("Result poster not found");
  }

  const blob = await response.blob();
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = `${resultId}.png`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
