"use client";

import { useTranslations } from "@/components/locale-provider";
import type { Locale } from "@/lib/locale";

const languageOptions: Array<{ locale: Locale; label: string }> = [
  { locale: "zh", label: "中文" },
  { locale: "en", label: "EN" },
  { locale: "ko", label: "한국어" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale, t } = useTranslations();

  return (
    <div
      className={`inline-flex max-w-full shrink-0 items-center gap-0.5 rounded-full border border-[var(--line)] bg-white/84 p-1 text-[0.68rem] font-medium text-[var(--muted)] shadow-[0_8px_20px_rgba(28,40,35,0.04)] backdrop-blur sm:gap-1 sm:text-[0.72rem] ${className}`.trim()}
      role="group"
      aria-label={t("languageSwitcher")}
    >
      {languageOptions.map((option) => {
        const isActive = option.locale === locale;

        return (
          <button
            key={option.locale}
            type="button"
            onClick={() => setLocale(option.locale)}
            className={[
              "rounded-full px-2.5 py-1.5 leading-none whitespace-nowrap transition-colors sm:px-3",
              isActive
                ? "bg-[var(--surface-soft)] text-[var(--ink)] shadow-[0_2px_8px_rgba(28,40,35,0.05)]"
                : "text-[var(--muted)] hover:bg-[var(--surface-soft)] hover:text-[var(--ink-soft)]",
            ].join(" ")}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
