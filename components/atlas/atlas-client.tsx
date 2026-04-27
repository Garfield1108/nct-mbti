"use client";

import Link from "next/link";
import { AtlasGrid } from "@/components/atlas/atlas-grid";
import { useTranslations } from "@/components/locale-provider";
import { RESULT_COUNT } from "@/data/results";
import { formatAtlasSubtitle } from "@/lib/locale";
import { clearQuizState } from "@/lib/storage";
import { buttonClasses } from "@/components/ui/button";

function BackArrow() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path
        d="M17 12H7M11 8L7 12L11 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AtlasClient() {
  const { locale, t } = useTranslations();

  return (
    <div
      className="overflow-x-hidden px-4 py-4 sm:px-5 sm:py-6"
      style={{
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif',
      }}
    >
      <div className="mx-auto w-full max-w-[72rem]">
        <section className="rounded-[28px] border border-[var(--line)] bg-[linear-gradient(180deg,#f8faf8_0%,#ffffff_58%,#f4f7f5_100%)] p-5 shadow-[0_18px_50px_rgba(28,40,35,0.06)] sm:p-7">
          <div className="flex justify-center">
            <div className="grid w-full max-w-[28rem] grid-cols-2 gap-2.5 sm:gap-3">
              <Link
                href="/"
                className={`${buttonClasses({ variant: "secondary", size: "md", fullWidth: true })} gap-2 bg-[rgba(255,255,255,0.78)]`}
              >
                <span className="text-[#315746]">
                  <BackArrow />
                </span>
                {t("backHome")}
              </Link>
              <Link
                href="/quiz"
                onClick={() => {
                  clearQuizState();
                }}
                className={buttonClasses({ size: "md", fullWidth: true })}
              >
                {t("startTest")}
              </Link>
            </div>
          </div>

          <div className="mt-7 text-center sm:mt-8">
            <h1 className="text-[1.9rem] font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-[2.2rem]">
              {t("atlasTitle")}
            </h1>
            <p className="mt-2 text-[0.96rem] font-medium text-[var(--muted)] sm:text-[1rem]">
              {formatAtlasSubtitle(locale, RESULT_COUNT)}
            </p>
          </div>

          <AtlasGrid className="mt-6 sm:mt-7" />
        </section>
      </div>
    </div>
  );
}
