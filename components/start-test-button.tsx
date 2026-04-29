"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
  const { t } = useTranslations();
  const [isStarting, setIsStarting] = useState(false);
  const handleStart = () => {
    if (isStarting) {
      return;
    }

    setIsStarting(true);
  };

  useEffect(() => {
    const resetStarting = () => {
      setIsStarting(false);
    };

    window.addEventListener("pageshow", resetStarting);
    window.addEventListener("focus", resetStarting);

    return () => {
      window.removeEventListener("pageshow", resetStarting);
      window.removeEventListener("focus", resetStarting);
    };
  }, []);

  return (
    <Link
      href="/quiz"
      prefetch
      onClick={handleStart}
      aria-busy={isStarting}
      className={`${buttonClasses({ variant, size, fullWidth })} ${className}`.trim()}
    >
      <span className="inline-flex items-center gap-2">
        {isStarting ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
        ) : null}
        {isStarting ? t("openingTest") : t("startTest")}
      </span>
    </Link>
  );
}
