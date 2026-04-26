"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "@/components/locale-provider";
import { DuoIllustration } from "@/components/duo-illustration";
import {
  getIllustrationAltText,
  getPosterAltText,
} from "@/lib/locale";
import { getLocalizedResultPosterPath } from "@/lib/share-card";
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
  hero: "aspect-[1122/1402]",
  card: "aspect-[1122/1402]",
} as const;

const imageDimensions = {
  hero: { width: 1122, height: 1402, sizes: "(max-width: 1024px) 100vw, 42vw" },
  card: { width: 1122, height: 1402, sizes: "(max-width: 768px) 100vw, 30vw" },
} as const;

export function ResultVisual({
  result,
  variant = "hero",
}: ResultVisualProps) {
  const { locale } = useTranslations();
  const [hasImageError, setHasImageError] = useState(false);
  const posterSrc = getLocalizedResultPosterPath({
    resultId: result.id,
    locale,
    hasEnglishPoster: result.hasEnglishPoster,
  });
  const shouldShowFallback = hasImageError || !posterSrc;

  return (
    <div className={variantClasses[variant]}>
      {shouldShowFallback ? (
        <div className={frameClasses[variant]}>
          <DuoIllustration
            result={result}
            label={getIllustrationAltText(locale, result.pair)}
          />
        </div>
      ) : (
        <Image
          src={posterSrc}
          alt={getPosterAltText(locale, result.pair)}
          width={imageDimensions[variant].width}
          height={imageDimensions[variant].height}
          sizes={imageDimensions[variant].sizes}
          priority={variant === "hero"}
          onError={() => setHasImageError(true)}
          style={{ width: "100%", height: "auto", maxWidth: "100%" }}
          className="block max-w-full rounded-[20px] object-contain object-center"
        />
      )}
    </div>
  );
}
