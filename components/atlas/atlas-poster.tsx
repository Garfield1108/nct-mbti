"use client";

import { ResultPosterImage } from "@/components/result/result-poster-image";
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
  return (
    <ResultPosterImage
      resultId={resultId}
      alt={alt}
      pair={pair}
      typeName={typeName}
      variant="atlas"
      className="rounded-[15px] sm:rounded-[18px]"
      imageClassName="p-2"
    />
  );
}
