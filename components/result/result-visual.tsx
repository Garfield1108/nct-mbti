"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "@/components/locale-provider";
import { DuoIllustration } from "@/components/duo-illustration";
import { getIllustrationAltText, getPosterAltText } from "@/lib/locale";
import { getResultPosterPath } from "@/lib/share-card";
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
  hero:
    "relative aspect-[1122/1402] overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#f7faf8_0%,#eef4f0_100%)]",
  card:
    "relative aspect-[1122/1402] overflow-hidden rounded-[14px] bg-[linear-gradient(180deg,#f7faf8_0%,#eef4f0_100%)] sm:rounded-[16px]",
} as const;

const imageDimensions = {
  hero: { width: 1122, height: 1402, sizes: "(max-width: 1024px) 100vw, 42vw" },
  card: { width: 1122, height: 1402, sizes: "(max-width: 768px) 100vw, 30vw" },
} as const;

export function ResultVisual({
  result,
  variant = "hero",
}: ResultVisualProps) {
  const { locale, t } = useTranslations();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);
  const shouldUsePoster = variant === "hero";
  const posterSrc = shouldUsePoster ? getResultPosterPath(result.id) : null;
  const shouldShowFallback = !shouldUsePoster || hasImageError || !posterSrc;
  const showLoadingState = !shouldShowFallback && !isLoaded;

  return (
    <div className={variantClasses[variant]}>
      {shouldShowFallback ? (
        <div className={frameClasses[variant]}>
          <DuoIllustration
            result={result}
            label={getIllustrationAltText(locale, result.pair)}
          />
          {variant === "hero" ? (
            <div className="absolute inset-x-4 bottom-4 rounded-[18px] bg-white/92 px-3 py-2.5 text-center text-sm font-medium text-[var(--muted)] shadow-[0_8px_18px_rgba(28,40,35,0.06)]">
              {t("resultPosterLoadFailed")}
            </div>
          ) : null}
        </div>
      ) : (
        <div className={frameClasses[variant]}>
          <Image
            src={posterSrc}
            alt={getPosterAltText(locale, result.pair)}
            width={imageDimensions[variant].width}
            height={imageDimensions[variant].height}
            sizes={imageDimensions[variant].sizes}
            priority
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasImageError(true)}
            className={`block h-full w-full object-contain object-center transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          {showLoadingState ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="soft-shimmer absolute inset-0" aria-hidden="true" />
              {variant === "hero" ? (
                <>
                  <span className="relative h-7 w-7 animate-spin rounded-full border-2 border-[#8eb7a0]/35 border-t-[#2f6d55]" />
                  <p className="relative px-4 text-center text-sm font-medium text-[var(--muted)]">
                    {t("loadingResultPoster")}
                  </p>
                </>
              ) : null}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
