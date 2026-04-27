"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
  const [isPending, startTransition] = useTransition();
  const isLoading = isNavigating || isPending;

  const handleStart = () => {
    if (isLoading) {
      return;
    }

    setIsNavigating(true);
    clearQuizState();

    window.requestAnimationFrame(() => {
      startTransition(() => {
        router.push("/quiz");
      });
    });
  };

  return (
    <Button
      type="button"
      onClick={handleStart}
      disabled={isLoading}
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
