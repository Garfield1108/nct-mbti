"use client";

import Link from "next/link";
import { useTranslations } from "@/components/locale-provider";

interface SiteLogoProps {
  className?: string;
  showIcon?: boolean;
  showSubtitle?: boolean;
  stacked?: boolean;
  title?: string;
  titleEn?: string;
  titleKo?: string;
}

export function SiteLogo({
  className = "",
  showIcon = true,
  showSubtitle = false,
  stacked = false,
  title,
  titleEn,
  titleKo,
}: SiteLogoProps) {
  const { locale, t } = useTranslations();
  const displayTitle =
    locale === "en"
      ? titleEn ?? title ?? titleKo ?? t("siteTitle")
      : locale === "ko"
        ? titleKo ?? title ?? titleEn ?? t("siteTitle")
        : title ?? titleEn ?? titleKo ?? t("siteTitle");

  return (
    <Link
      href="/"
      className={[
        stacked
          ? "inline-flex flex-col gap-0.5 text-[var(--ink)]"
          : "inline-flex items-center gap-3 text-sm font-semibold text-[var(--ink)]",
        className,
      ].join(" ")}
    >
      {showIcon ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--ink)] ring-1 ring-[var(--line)]">
          N
        </span>
      ) : null}
      <span
        className={
        stacked
          ? "text-sm font-semibold tracking-[0.06em]"
          : "tracking-[0.08em]"
        }
      >
        {displayTitle}
      </span>
      {showSubtitle ? (
        <span className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)] sm:text-[0.72rem]">
          {t("siteSubtitle")}
        </span>
      ) : null}
    </Link>
  );
}
