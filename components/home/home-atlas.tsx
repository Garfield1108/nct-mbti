"use client";

import { AtlasGrid } from "@/components/atlas/atlas-grid";
import { useTranslations } from "@/components/locale-provider";
import { RESULT_COUNT } from "@/data/results";
import { formatAtlasSubtitle } from "@/lib/locale";

export function HomeAtlas() {
  const { locale, t } = useTranslations();

  return (
    <section
      id="result-atlas"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9f6_100%)] px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto w-full max-w-[74rem]">
        <div className="mx-auto max-w-[30rem] text-center">
          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#17231f] sm:text-[2.5rem]">
            {t("atlasTitle")}
          </h2>
          <p className="mt-3 text-[0.95rem] font-semibold text-[#5f7468] sm:text-[1rem]">
            {formatAtlasSubtitle(locale, RESULT_COUNT)}
          </p>
        </div>

        <AtlasGrid className="mt-8 sm:mt-10" />
      </div>
    </section>
  );
}
