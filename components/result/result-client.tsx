"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/components/locale-provider";
import { RESULTS } from "@/data/results";
import { getLocalizedResultContent } from "@/lib/result-localization";
import { getPosterAltText } from "@/lib/locale";
import { computeQuizResult } from "@/lib/scoring";
import { clearQuizState, loadQuizState } from "@/lib/storage";
import type { RankedResult, ResultProfile } from "@/lib/types";
import { ResultPosterImage } from "@/components/result/result-poster-image";
import { Button } from "@/components/ui/button";

interface ResultClientProps {
  result: ResultProfile;
}

const findRelatedResults = (result: ResultProfile) => {
  const hintSet = new Set<string>(result.scoringHints);

  return RESULTS.filter((item) => item.id !== result.id)
    .map((item) => ({
      result: item,
      sharedHints: item.scoringHints.filter((trait) => hintSet.has(trait)).length,
    }))
    .sort((left, right) => {
      const bySharedHints = right.sharedHints - left.sharedHints;
      if (bySharedHints !== 0) {
        return bySharedHints;
      }

      return left.result.typeName.localeCompare(
        right.result.typeName,
        "zh-Hans-CN",
      );
    })
    .slice(0, 3)
    .map((item) => item.result);
};

function DetailTag({ item }: { item: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--surface-soft)] px-3 py-1.5 text-[0.84rem] font-medium text-[var(--ink-soft)]">
      {item}
    </span>
  );
}

function QuickReadCard({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="rounded-[22px] border border-[var(--line)] bg-white p-4 shadow-[0_12px_28px_rgba(28,40,35,0.04)]">
      <p className="text-[0.76rem] font-semibold tracking-[0.12em] text-[var(--muted)]">
        {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <DetailTag key={`${title}-${item}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function ResultClient({ result }: ResultClientProps) {
  const router = useRouter();
  const { locale, t } = useTranslations();
  const [isPending, startTransition] = useTransition();
  const hasHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const ranking: RankedResult[] =
    !hasHydrated
      ? []
      : (() => {
          const storedState = loadQuizState();
          if (!storedState || Object.keys(storedState.answers).length === 0) {
            return [];
          }

          return computeQuizResult(storedState.answers).ranking;
        })();

  const matchResults =
    ranking.length > 0
      ? ranking
          .filter((item) => item.result.id !== result.id)
          .slice(0, 3)
          .map((item) => item.result)
      : findRelatedResults(result);
  const localizedResult = getLocalizedResultContent(result, locale);
  const quickReadSections = [
    { title: t("relationshipBase"), items: localizedResult.coreVibe },
    { title: t("whatAttractsYou"), items: localizedResult.attractionStyle },
    { title: t("howYouShowAffection"), items: localizedResult.affectionStyle },
    { title: t("relationshipPace"), items: localizedResult.relationshipTempo },
    { title: t("conflictPattern"), items: localizedResult.conflictStyle },
    { title: t("securityNeeds"), items: localizedResult.securityNeed },
    { title: t("redFlags"), items: localizedResult.weakPoints },
    { title: t("idealScenes"), items: localizedResult.idealDate },
  ] as const;

  useEffect(() => {
    document.documentElement.classList.add("result-page-active");
    document.body.classList.add("result-page-active");

    return () => {
      document.documentElement.classList.remove("result-page-active");
      document.body.classList.remove("result-page-active");
    };
  }, []);

  const handleRetake = () => {
    clearQuizState();
    startTransition(() => {
      router.push("/quiz");
    });
  };

  return (
    <div className="overflow-x-hidden px-4 py-4 sm:px-5 sm:py-6">
      <div className="mx-auto grid w-full max-w-[62rem] gap-4 sm:gap-5">
        <section className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8faf8_0%,#ffffff_48%,#f4f7f5_100%)] p-5 shadow-[0_18px_50px_rgba(28,40,35,0.06)] sm:p-6 lg:px-9 lg:py-8">
          <div className="grid items-center gap-5 lg:grid-cols-[minmax(18rem,21.5rem)_minmax(0,1fr)] lg:gap-8">
            <div className="mx-auto w-full max-w-[17.25rem] min-w-0 sm:max-w-[18.75rem] lg:mx-0 lg:max-w-[21.5rem]">
              <ResultPosterImage
                resultId={result.id}
                alt={getPosterAltText(locale, result.pair)}
                pair={result.pair}
                typeName={localizedResult.typeName}
                variant="hero"
                priority
                className="rounded-[20px] border border-[var(--line)] bg-white shadow-[0_18px_42px_rgba(28,40,35,0.08)] sm:rounded-[30px]"
                imageClassName="rounded-[20px] p-1.5 sm:rounded-[24px] sm:p-2"
              />
            </div>

            <div className="min-w-0 text-center lg:text-left">
              <p className="text-[0.88rem] font-semibold tracking-[0.14em] text-[var(--muted)] sm:text-[0.92rem]">
                {t("yourCpType")}
              </p>
              <h1 className="mt-2.5 text-[1.9rem] font-semibold leading-[1.08] text-[var(--ink)] sm:text-[2.3rem] lg:text-[2.55rem]">
                {localizedResult.typeName}
              </h1>
              <p className="mt-2.5 text-[1.2rem] font-medium text-[var(--ink-soft)] sm:text-[1.3rem] lg:text-[1.38rem]">
                {result.pair}
              </p>
              <p className="mx-auto mt-3 max-w-[30rem] text-[0.98rem] leading-7 text-[var(--muted)] lg:mx-0 sm:text-[1.02rem]">
                {localizedResult.oneLine}
              </p>

              <div className="mx-auto mt-5 flex w-full max-w-[20rem] justify-center lg:mx-0">
                <Button
                  type="button"
                  onClick={handleRetake}
                  disabled={isPending}
                  fullWidth
                  className="mx-auto h-[3.25rem] max-w-[20rem] bg-[#2f6d55] text-white shadow-[0_10px_24px_rgba(47,109,85,0.18)] hover:bg-[#285d49]"
                >
                  <span className="inline-flex items-center gap-2">
                    {isPending ? (
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/35 border-t-white" />
                    ) : null}
                    {t("retakeTest")}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--line)] bg-white p-5 shadow-[0_18px_50px_rgba(28,40,35,0.05)] sm:mt-1 sm:p-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[0.9rem] font-semibold tracking-[0.14em] text-[var(--muted)]">
              {t("yourRelationshipGuide")}
            </h2>
            <p className="mt-4 text-[1rem] leading-8 text-[var(--ink-soft)] sm:text-[1.04rem]">
              {localizedResult.narrative}
            </p>
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_18px_50px_rgba(28,40,35,0.05)] sm:p-5 lg:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-[var(--ink)]">
                {t("quickRead")}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {t("quickReadDescription")}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {quickReadSections.map((section) => (
              <QuickReadCard
                key={section.title}
                title={section.title}
                items={section.items}
              />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-[var(--line)] bg-white p-4 shadow-[0_18px_50px_rgba(28,40,35,0.05)] sm:p-5 lg:p-6">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-[var(--ink)]">
                {t("similarTypes")}
              </h2>
              <p className="mt-1 text-sm text-[var(--muted)]">
                {t("similarTypesDescription")}
              </p>
            </div>
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {matchResults.map((item) => {
              const localizedItem = getLocalizedResultContent(item, locale);

              return (
                <Link
                  key={item.id}
                  href={`/result/${item.id}`}
                  className="flex min-h-[7.5rem] items-center gap-3 overflow-hidden rounded-[22px] border border-[var(--line)] bg-[var(--surface-soft)] p-3.5 transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_16px_36px_rgba(28,40,35,0.08)] active:scale-[0.99]"
                >
                  <div className="w-20 shrink-0 sm:w-[5.5rem]">
                    <ResultPosterImage
                      resultId={item.id}
                      alt={getPosterAltText(locale, item.pair)}
                      pair={item.pair}
                      typeName={localizedItem.typeName}
                      variant="card"
                      className="rounded-[14px] border border-[var(--line)] bg-white shadow-[0_12px_28px_rgba(28,40,35,0.06)] sm:rounded-[16px]"
                      imageClassName="rounded-[12px] p-1"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="truncate text-[0.8rem] text-[var(--muted)]">
                      {item.pair}
                    </p>
                    <p className="mt-1 truncate text-[0.98rem] font-medium text-[var(--ink)]">
                      {localizedItem.typeName}
                    </p>
                    <p
                      className="mt-1 overflow-hidden text-[0.82rem] leading-5 text-[var(--muted)]"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {localizedItem.oneLine}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
