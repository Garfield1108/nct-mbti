"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
  const currentSrc = sources[sourceIndex];

  const handleError = () => {
    if (sourceIndex < sources.length - 1) {
      setSourceIndex((current) => current + 1);
      setIsLoaded(false);
      return;
    }

    setHasError(true);
  };

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
            onLoad={() => setIsLoaded(true)}
            onError={handleError}
            className={`object-contain object-center transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${imageClassName}`.trim()}
          />
          {!isLoaded ? (
            <div className="soft-shimmer absolute inset-0" aria-hidden="true" />
          ) : null}
        </>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-3 text-center text-[#2f6f55]">
          <p className="text-[0.74rem] font-semibold leading-4">{pair}</p>
          <p className="text-[0.7rem] font-medium leading-4 text-[#557766]">
            {typeName}
          </p>
        </div>
      )}
    </div>
  );
}
