import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { ResultClient } from "@/components/result/result-client";
import { RESULTS_BY_ID } from "@/data/results";
import { getAbsoluteSiteUrl } from "@/lib/site";
import type { ResultId } from "@/lib/types";

type ResultPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return Object.keys(RESULTS_BY_ID).map((id) => ({
    id,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ResultPageProps): Promise<Metadata> {
  const { id } = await params;
  const result = RESULTS_BY_ID[id as ResultId];

  if (!result) {
    return {
      title: "结果不存在",
    };
  }

  const title = `${result.typeName} · ${result.pair}`;
  const description = result.oneLine;
  const resultUrl = getAbsoluteSiteUrl(`/result/${result.id}`);
  const resultImageUrl = getAbsoluteSiteUrl(result.imagePath);

  return {
    title,
    description,
    alternates: resultUrl
      ? {
          canonical: resultUrl,
        }
      : undefined,
    openGraph: {
      title,
      description,
      type: "website",
      url: resultUrl ?? undefined,
      images: resultImageUrl
        ? [
            {
              url: resultImageUrl,
              width: 1122,
              height: 1402,
              alt: `${result.pair} 结果图`,
            },
          ]
        : undefined,
    },
    twitter: {
      card: resultImageUrl ? "summary_large_image" : "summary",
      title,
      description,
      images: resultImageUrl ? [resultImageUrl] : undefined,
    },
  };
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id } = await params;
  const result = RESULTS_BY_ID[id as ResultId];

  if (!result) {
    notFound();
  }

  return (
    <PageShell>
      <ResultClient result={result} />
    </PageShell>
  );
}