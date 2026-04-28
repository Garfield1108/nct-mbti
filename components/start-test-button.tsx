"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";
import { useTranslations } from "@/components/locale-provider";
import { clearQuizState } from "@/lib/storage";
import { Button } from "@/components/ui/button";

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
  const [isNavigating, setIsNavigating] = useState(false);
  const isLoading = isNavigating;

  useEffect(() => {
    void router.prefetch("/quiz");
  }, [router]);

  const prefetchQuiz = () => {
    void router.prefetch("/quiz");
  };

  const handleStart = () => {
    if (isLoading) {
      return;
    }

    flushSync(() => {
      setIsNavigating(true);
    });

    clearQuizState();
    prefetchQuiz();
    router.push("/quiz");
  };

  return (
    <Button
      type="button"
      onClick={handleStart}
      onMouseEnter={prefetchQuiz}
      onTouchStart={prefetchQuiz}
      disabled={isLoading}
      aria-busy={isLoading}
      size={size}
      variant={variant}
      fullWidth={fullWidth}
      className={className}
    >
      <span className="inline-flex items-center gap-2">
        {isLoading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
        ) : null}
        {isLoading ? t("openingTest") : t("startTest")}
      </span>
    </Button>
  );
}
