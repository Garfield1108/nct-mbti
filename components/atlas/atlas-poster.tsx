"use client";

import Image from "next/image";
import { useState } from "react";
import { getResultPosterPath, getResultPosterThumbPath } from "@/lib/share-card";
import type { ResultId } from "@/lib/types";

interface AtlasPosterProps {
  resultId: ResultId;
  alt: string;
  pair: string;
  typeName: string;
}

export function AtlasPoster({
  resultId,
  alt,
  pair,
  typeName,
}: AtlasPosterProps) {
  const thumbSrc = getResultPosterThumbPath(resultId);
  const fallbackSrc = getResultPosterPath(resultId);
  const [currentSrc, setCurrentSrc] = useState(thumbSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setIsLoaded(false);
      return;
    }

    setHasError(true);
  };

  return (
    <div className="relative aspect-[1122/1402] overflow-hidden rounded-[15px] bg-[linear-gradient(180deg,#f8fbf6_0%,#eef5ef_100%)] sm:rounded-[18px]">
      {!hasError ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={currentSrc}
              alt={alt}
              fill
              unoptimized
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              onError={handleError}
              className={`object-contain object-center p-2 transition-opacity duration-300 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
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
