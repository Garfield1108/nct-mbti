"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "@/components/locale-provider";

const AtlasGrid = dynamic(
  () => import("@/components/atlas/atlas-grid").then((mod) => mod.AtlasGrid),
  { ssr: false },
);

function AtlasGridPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`grid grid-cols-2 gap-3.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 xl:grid-cols-5 ${className}`.trim()}
      aria-hidden="true"
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-[20px] border border-[var(--line)] bg-white/85 p-[0.7rem] sm:rounded-[24px] sm:p-3"
        >
          <div className="soft-shimmer aspect-[1122/1402] rounded-[15px] bg-[var(--surface-soft)] sm:rounded-[18px]" />
          <div className="mt-2.5 space-y-2 sm:mt-3">
            <div className="h-4 rounded-full bg-[var(--surface-soft)]" />
            <div className="h-3.5 w-3/4 rounded-full bg-[var(--surface-soft)]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function HomeAtlas() {
  const { t } = useTranslations();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [shouldRenderGrid, setShouldRenderGrid] = useState(false);

  useEffect(() => {
    if (shouldRenderGrid) {
      return;
    }

    let timeoutId: number | null = null;
    let idleId: number | null = null;
    const section = sectionRef.current;
    const activateGrid = () => {
      setShouldRenderGrid(true);
    };
    const requestIdle =
      "requestIdleCallback" in window ? window.requestIdleCallback : null;
    const cancelIdle =
      "cancelIdleCallback" in window ? window.cancelIdleCallback : null;

    const observer =
      typeof IntersectionObserver === "undefined" || !section
        ? null
        : new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                activateGrid();
              }
            },
            { rootMargin: "260px 0px" },
          );

    if (observer && section) {
      observer.observe(section);
    }

    if (requestIdle) {
      idleId = requestIdle(activateGrid, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(activateGrid, 1200);
    }

    return () => {
      observer?.disconnect();

      if (idleId !== null && cancelIdle) {
        cancelIdle(idleId);
      }

      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [shouldRenderGrid]);

  return (
    <section
      id="result-atlas"
      ref={sectionRef}
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9f6_100%)] px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto w-full max-w-[74rem]">
        <div className="mx-auto max-w-[30rem] text-center">
          <h2 className="font-serif text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#17231f] sm:text-[2.7rem]">
            {t("atlasTitle")}
          </h2>
        </div>

        {shouldRenderGrid ? (
          <AtlasGrid className="mt-8 sm:mt-10" />
        ) : (
          <AtlasGridPlaceholder className="mt-8 sm:mt-10" />
        )}
      </div>
    </section>
  );
}
