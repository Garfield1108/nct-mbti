"use client";

import { useState, useRef } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useTranslations } from "@/components/locale-provider";
import { RESULT_COUNT } from "@/data/results";
import { formatPairCount } from "@/lib/locale";
import { buttonClasses } from "@/components/ui/button";

type SparkleConfig = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  delay: string;
};

const sparkles: readonly SparkleConfig[] = [
  { top: "15%", left: "10%", size: 24, delay: "0s" },
  { top: "45%", right: "8%", size: 16, delay: "1s" },
  { bottom: "20%", left: "15%", size: 20, delay: "2s" },
];

function Sparkle({ size }: { size: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
    </svg>
  );
}

function MetaIcon({ type }: { type: "clock" | "heart" }) {
  if (type === "clock") {
    return (
      <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
      </svg>
    );
  }

  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" />
    </svg>
  );
}

function StepArrow() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        d="M12 21L10.59 19.59L18.17 12H2V10H18.17L10.59 2.41L12 1L23 12L12 21Z"
        transform="rotate(-90 12 12)"
      />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
      <path
        d="M6 9L12 15L18 9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeHero() {
  const { locale, t } = useTranslations();
  const [isStarting, setIsStarting] = useState(false);
  const chestRef = useRef<HTMLDivElement>(null);
  const metaItems = [
    { label: t("aboutMinutes"), icon: "clock" as const },
    { label: formatPairCount(locale, RESULT_COUNT), icon: "heart" as const },
  ] as const;

  const updateTilt = (clientX: number, clientY: number) => {
    if (!chestRef.current) {
      return;
    }

    const xAxis = (window.innerWidth / 2 - clientX) / 25;
    const yAxis = (window.innerHeight / 2 - clientY) / 25;

    chestRef.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const resetTilt = () => {
    if (!chestRef.current) {
      return;
    }

    chestRef.current.style.transform = "";
  };

  const scrollToAtlas = () => {
    document.getElementById("result-atlas")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        {sparkles.map((sparkle, index) => (
          <div
            key={`${sparkle.size}-${index}`}
            className="absolute fill-[var(--home-accent-light)] opacity-60 animate-[neo-float_4s_ease-in-out_infinite]"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              right: sparkle.right,
              bottom: sparkle.bottom,
              animationDelay: sparkle.delay,
            }}
          >
            <Sparkle size={sparkle.size} />
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[450px] flex-col items-center px-6 pb-8 pt-10 text-center">
        <header className="mb-10 flex w-full items-start justify-between gap-3">
          <div className="inline-block rounded-full bg-[var(--home-cream)] px-3 py-1.5 text-[0.68rem] font-bold tracking-[0.05em] text-[var(--home-accent-dark)] sm:px-3.5 sm:text-[0.72rem]">
            {t("siteSubtitle")}
          </div>
          <LanguageSwitcher />
        </header>

        <div
          className="relative my-5 flex w-full justify-center [perspective:1000px]"
          onMouseMove={(event) => updateTilt(event.clientX, event.clientY)}
          onMouseLeave={resetTilt}
          onTouchMove={(event) => {
            const touch = event.touches[0];
            if (!touch) {
              return;
            }

            updateTilt(touch.clientX, touch.clientY);
          }}
          onTouchEnd={resetTilt}
        >
          <div
            ref={chestRef}
            className="neo-rock relative h-[180px] w-[200px] [transform-style:preserve-3d]"
          >
            <svg
              className="drop-shadow-[0_10px_20px_rgba(48,109,85,0.12)]"
              width="200"
              height="180"
              viewBox="0 0 200 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect
                x="20"
                y="70"
                width="160"
                height="90"
                rx="12"
                fill="var(--home-accent-mid)"
              />
              <rect
                x="20"
                y="140"
                width="160"
                height="20"
                rx="4"
                fill="var(--home-accent-dark)"
              />
              <path
                d="M20 70C20 40 40 30 100 30C160 30 180 40 180 70H20Z"
                fill="var(--home-accent-dark)"
              />
              <rect
                x="40"
                y="30"
                width="20"
                height="130"
                rx="4"
                fill="var(--home-accent-light)"
              />
              <rect
                x="140"
                y="30"
                width="20"
                height="130"
                rx="4"
                fill="var(--home-accent-light)"
              />
              <circle cx="100" cy="85" r="22" fill="var(--home-accent-light)" />
              <path
                d="M100 95C100 95 112 87 112 80C112 76 108 74 105 74C102 74 100 77 100 77C100 77 98 74 95 74C92 74 88 76 88 80C88 87 100 95 100 95Z"
                fill="var(--home-accent-dark)"
              />
            </svg>
            <div className="absolute bottom-[-15px] left-1/2 h-3 w-[140px] -translate-x-1/2 rounded-full bg-[rgba(26,33,28,0.06)] blur-[4px]" />
          </div>
        </div>

        <section className="-mt-5 flex flex-col items-center gap-4">
          <div className="mb-1 flex gap-2">
            <div className="flex h-8 w-8 scale-110 items-center justify-center rounded-full bg-[var(--home-accent-dark)] text-white">
              <StepArrow />
            </div>
            <div className="h-8 w-8 rounded-full bg-[var(--home-accent-light)] opacity-50" />
            <div className="h-8 w-8 rounded-full bg-[var(--home-accent-light)] opacity-50" />
          </div>

          <h1 className="text-[38px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[var(--home-text)]">
            {t("homeLead")}
            <span className="block text-[var(--home-accent-dark)]">
              {t("homeHighlight")}
            </span>
          </h1>

          <div className="mb-2 flex gap-2">
            {metaItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 rounded-2xl border-[1.5px] border-[#dfe8e1] bg-[#f8faf8] px-4 py-2 text-[13px] font-semibold text-[var(--home-text)]"
              >
                <MetaIcon type={item.icon} />
                {item.label}
              </div>
            ))}
          </div>

          <div className="mt-2 flex w-full flex-col items-center px-2.5">
            <a
              href="/quiz"
              onPointerDown={() => setIsStarting(true)}
              className={`${buttonClasses({ size: "xl", variant: "primary", fullWidth: true })} max-w-[20rem]`}
            >
              <span className="inline-flex items-center gap-2">
                {isStarting ? (
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current/30 border-t-current" />
                ) : null}
                {isStarting ? t("openingTest") : t("startTest")}
              </span>
            </a>

            <button
              type="button"
              onClick={scrollToAtlas}
              className="group mt-5 inline-flex flex-col items-center gap-1.5 bg-transparent p-0 text-center text-[13px] font-semibold text-[rgba(47,111,85,0.68)] transition-colors hover:text-[#2f6d55] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(47,111,85,0.2)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label={t("atlasScrollHint")}
            >
              <span>{t("atlasScrollHint")}</span>
              <span className="scroll-hint-chevron text-[rgba(47,111,85,0.76)]">
                <ChevronDown />
              </span>
            </button>
          </div>

          <p className="mt-10 text-[11px] leading-[1.4] tracking-[0.01em] text-[#a2aba5]">
            {t("disclaimer")}
          </p>
        </section>
      </div>
    </section>
  );
}
