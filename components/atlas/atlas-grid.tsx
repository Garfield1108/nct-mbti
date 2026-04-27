"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "@/components/locale-provider";
import { RESULTS } from "@/data/results";
import { getLocalizedResultContent } from "@/lib/result-localization";

interface AtlasGridProps {
  className?: string;
  imageSizes?: string;
}

function AtlasPosterFrame({
  src,
  alt,
  pair,
  typeName,
  sizes,
}: {
  src: string;
  alt: string;
  pair: string;
  typeName: string;
  sizes: string;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[15px] bg-[linear-gradient(180deg,#f5f8f4_0%,#edf4ef_100%)] sm:rounded-[18px]">
      {!hasError ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`object-contain p-2 transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
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

export function AtlasGrid({
  className = "",
  imageSizes = "(max-width: 640px) 30vw, (max-width: 1024px) 22vw, 220px",
}: AtlasGridProps) {
  const { locale } = useTranslations();
  const atlasResults = RESULTS.map((result) => ({
    result,
    localized: getLocalizedResultContent(result, locale),
  }));

  return (
    <div
      className={`grid grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5 ${className}`.trim()}
    >
      {atlasResults.map(({ result, localized }) => (
        <article
          key={result.id}
          className="group flex h-full flex-col rounded-[20px] border border-[var(--line)] bg-white/92 p-2.5 shadow-[0_12px_30px_rgba(28,40,35,0.05)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(28,40,35,0.08)] sm:rounded-[24px] sm:p-3"
        >
          <AtlasPosterFrame
            src={result.imagePath}
            alt={`${result.pair} ${localized.typeName}`}
            pair={result.pair}
            typeName={localized.typeName}
            sizes={imageSizes}
          />
          <div className="mt-2.5 flex flex-1 flex-col text-left sm:mt-3">
            <p className="text-[0.83rem] font-bold leading-[1.2] tracking-[-0.01em] text-[#1b2a25] sm:text-[1.02rem]">
              {result.pair}
            </p>
            <p className="mt-1 text-[0.77rem] font-semibold leading-[1.25] text-[#2f6f55] sm:mt-1.5 sm:text-[0.94rem]">
              {localized.typeName}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
