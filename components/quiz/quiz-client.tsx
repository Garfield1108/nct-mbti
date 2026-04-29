"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/components/locale-provider";
import { QUESTIONS } from "@/data/questions";
import { countAnsweredQuestions, computeQuizResult } from "@/lib/scoring";
import {
  formatProgressAriaLabel,
  formatQuestionProgress,
  pickLocalizedText,
} from "@/lib/locale";
import {
  createEmptyQuizState,
  loadQuizState,
  saveQuizResult,
  saveQuizState,
  shouldStartFreshQuiz,
} from "@/lib/storage";
import {
  getResultDisplayPosterSrc,
  getResultPosterSrc,
} from "@/lib/share-card";
import type { StoredQuizState } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";

const LETTERS = ["A", "B", "C", "D"] as const;

function preloadResultImage(sources: string[], timeout = 1500) {
  return new Promise<void>((resolve) => {
    let settled = false;
    const timer = window.setTimeout(() => {
      settled = true;
      resolve();
    }, timeout);

    const finish = () => {
      if (settled) {
        return;
      }

      settled = true;
      window.clearTimeout(timer);
      resolve();
    };

    const attemptLoad = (index: number) => {
      if (settled || index >= sources.length) {
        finish();
        return;
      }

      const img = new window.Image();

      img.onload = finish;
      img.onerror = () => {
        attemptLoad(index + 1);
      };

      img.src = sources[index];
    };

    attemptLoad(0);
  });
}

export function QuizClient() {
  const router = useRouter();
  const { locale, t } = useTranslations();
  const [isSubmittingResult, setIsSubmittingResult] = useState(false);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [quizState, setQuizState] = useState<StoredQuizState>(() => {
    if (typeof window === "undefined") {
      return createEmptyQuizState();
    }

    const storedState = loadQuizState();
    if (!storedState || shouldStartFreshQuiz(storedState)) {
      return createEmptyQuizState();
    }

    return {
      ...storedState,
      currentIndex: Math.min(storedState.currentIndex, QUESTIONS.length - 1),
    };
  });
  const [isPending, startTransition] = useTransition();
  const advanceTimerRef = useRef<number | null>(null);

  const currentQuestion = QUESTIONS[quizState.currentIndex];
  const selectedOptionId = currentQuestion
    ? quizState.answers[currentQuestion.id]
    : undefined;
  const answeredCount = countAnsweredQuestions(quizState.answers, QUESTIONS);
  const isActionPending = isPending || isSubmittingResult || isAdvancing;

  useEffect(() => {
    return () => {
      if (advanceTimerRef.current !== null) {
        window.clearTimeout(advanceTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, [quizState.currentIndex]);

  const clearAdvanceTimer = () => {
    if (advanceTimerRef.current !== null) {
      window.clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  };

  const updateQuizState = (nextState: StoredQuizState) => {
    setQuizState(nextState);
    saveQuizState(nextState);
  };

  const handleSelect = (optionId: string) => {
    if (!currentQuestion || isActionPending) {
      return;
    }

    const nextState = {
      ...quizState,
      answers: {
        ...quizState.answers,
        [currentQuestion.id]: optionId,
      },
      resultId: null,
      startedAt: quizState.startedAt ?? new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    updateQuizState(nextState);
    setIsAdvancing(true);
    clearAdvanceTimer();

    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;

      if (quizState.currentIndex === QUESTIONS.length - 1) {
        setIsAdvancing(false);
        setIsSubmittingResult(true);

        window.requestAnimationFrame(() => {
          try {
            const computation = computeQuizResult(nextState.answers, QUESTIONS);
            const resultId = computation.result.id;
            const resultState = saveQuizResult(
              resultId,
              nextState.answers,
              nextState.currentIndex,
              nextState,
            );

            setQuizState(resultState);
            void preloadResultImage(
              [getResultDisplayPosterSrc(resultId), getResultPosterSrc(resultId)],
              1500,
            ).finally(() => {
              startTransition(() => {
                router.push(`/result/${resultId}`);
              });
            });
          } catch {
            setIsSubmittingResult(false);
          }
        });

        return;
      }

      updateQuizState({
        ...nextState,
        currentIndex: Math.min(QUESTIONS.length - 1, quizState.currentIndex + 1),
        updatedAt: new Date().toISOString(),
      });
      setIsAdvancing(false);
    }, 220);
  };

  const handlePrevious = () => {
    clearAdvanceTimer();
    setIsAdvancing(false);
    updateQuizState({
      ...quizState,
      currentIndex: Math.max(0, quizState.currentIndex - 1),
      updatedAt: new Date().toISOString(),
    });
  };

  if (!currentQuestion) {
    return (
      <div className="flex min-h-[calc(100svh-53px)] items-center justify-center px-5 py-12 sm:min-h-[calc(100svh-61px)]">
        <div className="rounded-full bg-[var(--surface-soft)] px-4 py-2 text-sm text-[var(--muted)]">
          {t("restoringProgress")}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 pb-[calc(env(safe-area-inset-bottom)+1.5rem)] pt-3 sm:px-5 sm:pb-8 sm:pt-4">
      <div className="mx-auto w-full max-w-[31rem] space-y-2.5">
        <div className="space-y-1.5">
          <div className="flex items-center justify-start gap-3 text-[0.72rem] font-medium tracking-[0.04em] text-[var(--muted)] sm:text-xs">
            <span>
              {formatQuestionProgress(
                locale,
                quizState.currentIndex + 1,
                QUESTIONS.length,
              )}
            </span>
          </div>
          <ProgressBar
            current={answeredCount}
            total={QUESTIONS.length}
            label={formatProgressAriaLabel(locale, answeredCount, QUESTIONS.length)}
          />
        </div>

        <section className="rounded-[26px] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_16px_40px_rgba(28,40,35,0.05)] sm:rounded-[28px] sm:p-6">
          <div className="space-y-2.5">
            <h1 className="text-[1.22rem] font-semibold leading-[1.28] text-[var(--ink)] sm:text-[1.5rem]">
              {pickLocalizedText(
                locale,
                currentQuestion.prompt,
                currentQuestion.promptEn,
                currentQuestion.promptKo,
              )}
            </h1>
          </div>

          <div
            key={currentQuestion.id}
            className="mt-5 grid gap-2.5 sm:mt-6"
          >
            {currentQuestion.options.map((item, index) => {
              const isActive = item.id === selectedOptionId;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  disabled={isActionPending}
                  className={[
                    "group flex w-full items-start gap-3 rounded-[18px] border px-4 py-3 text-left outline-none transition-[background-color,border-color,transform] duration-150 focus-visible:ring-2 focus-visible:ring-[#6fb091]/30 focus-visible:ring-offset-0",
                    isActive
                      ? "border-[#8eb7a0] bg-[#eff7f2] shadow-[0_8px_18px_rgba(47,109,85,0.06)]"
                      : "border-[var(--line)] bg-white shadow-none hover:border-[#bfd3c7] hover:bg-[#f7fbf8]",
                    isActionPending
                      ? "cursor-default"
                      : "active:scale-[0.995] active:bg-[#f2f8f4]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[0.72rem] font-semibold ring-1 transition-colors",
                      isActive
                        ? "bg-[#2f6d55] text-white ring-[#2f6d55]/15"
                        : "bg-[var(--surface-soft)] text-[var(--ink-soft)] ring-[var(--line)]",
                    ].join(" ")}
                  >
                    {LETTERS[index]}
                  </span>
                  <span className="min-w-0 space-y-0.5">
                    <span className="block text-[0.95rem] font-medium leading-5 text-[var(--ink)]">
                      {pickLocalizedText(
                        locale,
                        item.label,
                        item.labelEn,
                        item.labelKo,
                      )}
                    </span>
                    {item.note ? (
                      <span className="hidden text-[0.82rem] leading-5 text-[var(--muted)] sm:block">
                        {pickLocalizedText(
                          locale,
                          item.note,
                          item.noteEn,
                          item.noteKo,
                        )}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>

          {isSubmittingResult ? (
            <div className="mt-8 flex justify-center sm:mt-9">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#eff7f2] px-4 py-2 text-[0.92rem] font-medium text-[#2f6d55] shadow-[0_8px_20px_rgba(47,109,85,0.08)]">
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#2f6d55]/25 border-t-[#2f6d55]" />
                {t("generatingResult")}
              </div>
            </div>
          ) : quizState.currentIndex > 0 ? (
            <div className="mt-8 flex justify-center sm:mt-9">
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={handlePrevious}
                disabled={isActionPending}
                fullWidth
                className="h-12 max-w-[20rem] text-[#2f6d55]"
              >
                {t("previous")}
              </Button>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  );
}
