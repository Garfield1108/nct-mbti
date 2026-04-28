"use client";

import { useTranslations } from "@/components/locale-provider";
import { getPosterAltText } from "@/lib/locale";
import { getLocalizedResultContent } from "@/lib/result-localization";
import { ResultPosterImage } from "@/components/result/result-poster-image";
import type { ResultProfile } from "@/lib/types";

interface ResultVisualProps {
  result: ResultProfile;
  variant?: "hero" | "card";
}

const variantClasses: Record<NonNullable<ResultVisualProps["variant"]>, string> = {
  hero:
    "w-full max-w-full rounded-[26px] border border-[var(--line)] bg-white p-1.5 shadow-[0_18px_42px_rgba(28,40,35,0.08)] sm:rounded-[30px] sm:p-2",
  card:
    "w-full max-w-full rounded-[18px] border border-[var(--line)] bg-white p-1.5 shadow-[0_12px_28px_rgba(28,40,35,0.06)]",
};

const frameClasses = {
  hero: "rounded-[20px] sm:rounded-[24px]",
  card: "rounded-[14px] sm:rounded-[16px]",
} as const;

const imageDimensions = {
  hero: { imageClassName: "p-1.5 sm:p-2", priority: true },
  card: { imageClassName: "p-1.5", priority: false },
} as const;

export function ResultVisual({
  result,
  variant = "hero",
}: ResultVisualProps) {
  const { locale } = useTranslations();
  const localizedResult = getLocalizedResultContent(result, locale);

  return (
    <div className={variantClasses[variant]}>
      <ResultPosterImage
        resultId={result.id}
        alt={getPosterAltText(locale, result.pair)}
        pair={result.pair}
        typeName={localizedResult.typeName}
        variant={variant}
        priority={imageDimensions[variant].priority}
        className={frameClasses[variant]}
        imageClassName={imageDimensions[variant].imageClassName}
      />
    </div>
  );
}
