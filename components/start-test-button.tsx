"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "@/components/locale-provider";
import { buttonClasses } from "@/components/ui/button";

type StartTestButtonProps = {
  className?: string;
  size?: "md" | "lg" | "xl";
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
};

export function StartTestButton({
  className = "",
  size = "md",
  variant = "primary",
  fullWidth = false,
}: StartTestButtonProps) {
  const router = useRouter();
  const { t } = useTranslations();
  const [isStarting, setIsStarting] = useState(false);
  const [isPending, startTransition] = useTransition();

  const prefetchQuiz = useCallback(() => {
    router.prefetch("/quiz");
  }, [router]);

  useEffect(() => {
    prefetchQuiz();
  }, [prefetchQuiz]);

  const openQuiz = () => {
    setIsStarting(true);

    startTransition(() => {
      router.push("/quiz");
    });
  };

  return (
    <button
      type="button"
      onClick={openQuiz}
      onMouseEnter={prefetchQuiz}
      onTouchStart={prefetchQuiz}
      aria-busy={isStarting || isPending}
      disabled={isStarting || isPending}
      className={`${buttonClasses({ variant, size, fullWidth })} ${className}`.trim()}
    >
      <span className="inline-flex items-center gap-2">
        {isStarting || isPending ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
        ) : null}
        {isStarting || isPending ? t("openingTest") : t("startTest")}
      </span>
    </button>
  );
}
