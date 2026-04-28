"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "@/components/locale-provider";
import type { ResultId } from "@/lib/types";
import {
  getResultDisplayPosterSrc,
  getResultPosterSrc,
  getResultThumbSrc,
} from "@/lib/share-card";

type ResultPosterVariant = "hero" | "card" | "atlas";

const variantSizes: Record<ResultPosterVariant, string> = {
  hero: "(max-width: 640px) 86vw, (max-width: 1024px) 56vw, 344px",
  card: "(max-width: 768px) 40vw, 160px",
  atlas: "(max-width: 640px) 46vw, (max-width: 1280px) 24vw, 220px",
};

interface ResultPosterImageProps {
  resultId: ResultId | string;
  alt: string;
  pair: string;
  typeName: string;
  variant?: ResultPosterVariant;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
}

export function ResultPosterImage({
  resultId,
  alt,
  pair,
  typeName,
  variant = "atlas",
  priority = false,
  className = "",
  imageClassName = "",
}: ResultPosterImageProps) {
  const { t } = useTranslations();
  const sources = useMemo(
    () =>
      variant === "hero"
        ? [getResultDisplayPosterSrc(resultId), getResultPosterSrc(resultId)]
        : [getResultThumbSrc(resultId), getResultPosterSrc(resultId)],
    [resultId, variant],
  );
  const [sourceIndex, setSourceIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);
  const loadingTimerRef = useRef<number | null>(null);
  const currentSrc = sources[sourceIndex];
  const loadingText =
    variant === "hero" ? t("loadingResultPoster") : t("loadingPosterThumb");
  const loadingDelay = variant === "hero" ? 300 : 0;

  const clearLoadingTimer = () => {
    if (loadingTimerRef.current !== null) {
      window.clearTimeout(loadingTimerRef.current);
      loadingTimerRef.current = null;
    }
  };

  useEffect(() => {
    clearLoadingTimer();

    if (!isLoaded && !hasError) {
      loadingTimerRef.current = window.setTimeout(() => {
        setShowLoadingText(true);
      }, loadingDelay);
    }

    return () => {
      clearLoadingTimer();
    };
  }, [currentSrc, hasError, isLoaded, loadingDelay]);

  const handleLoad = () => {
    clearLoadingTimer();
    setIsLoaded(true);
    setShowLoadingText(false);
  };

  const handleError = () => {
    clearLoadingTimer();

    if (sourceIndex < sources.length - 1) {
      setSourceIndex((current) => current + 1);
      setIsLoaded(false);
      setShowLoadingText(false);
      return;
    }

    setHasError(true);
    setShowLoadingText(false);
  };

  const isHero = variant === "hero";
  return (
    <div
      className={`relative aspect-[1122/1402] overflow-hidden bg-[linear-gradient(180deg,#f8fbf6_0%,#eef5ef_100%)] ${className}`.trim()}
    >
      {!hasError ? (
        <>
          <Image
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            fill
            unoptimized
            priority={priority}
            loading={priority ? undefined : "lazy"}
            decoding="async"
            sizes={variantSizes[variant]}
            onLoad={handleLoad}
            onError={handleError}
            className={`object-contain object-center transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imageClassName}`.trim()}
          />
          {!isLoaded ? (
            <div
              className="soft-shimmer absolute inset-0 z-10"
              aria-hidden="true"
            />
          ) : null}
          {showLoadingText ? (
            <div
              className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center p-3"
            >
              {isHero ? (
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.48),transparent_72%)]" />
              ) : null}
              <div
                className={`relative mx-auto flex w-fit max-w-full items-center gap-1.5 rounded-full border border-[rgba(47,111,85,0.12)] ${
                  isHero
                    ? "bg-white/82 px-3.5 py-2 text-[0.82rem] text-[#345747] shadow-[0_8px_20px_rgba(20,40,30,0.06)] backdrop-blur-[3px]"
                    : "bg-white/78 px-3 py-2 text-[0.72rem] text-[#2f6f55] shadow-[0_8px_20px_rgba(20,40,30,0.06)] backdrop-blur-[2px]"
                }`}
              >
                <span
                  className={`truncate font-bold ${isHero ? "max-w-[15rem]" : "max-w-[9rem]"}`}
                >
                  {loadingText}
                </span>
              </div>
            </div>
          ) : null}
        </>
      ) : (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-1.5 px-3 text-center text-[#2f6f55]">
          <p className="text-[0.74rem] font-semibold leading-4">{pair}</p>
          <p className="text-[0.7rem] font-medium leading-4 text-[#557766]">
            {typeName}
          </p>
          <p
            className={`rounded-full bg-white/76 px-2.5 py-1 text-[#4f7262] shadow-[0_6px_16px_rgba(28,40,35,0.05)] ${
              isHero ? "text-[0.76rem]" : "text-[0.68rem]"
            }`}
          >
            {t("resultPosterLoadFailed")}
          </p>
        </div>
      )}
    </div>
  );
}
