"use client";

import { AtlasGrid } from "@/components/atlas/atlas-grid";
import { useTranslations } from "@/components/locale-provider";

export function HomeAtlas() {
  const { t } = useTranslations();

  return (
    <section
      id="result-atlas"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f5f9f6_100%)] px-4 pb-16 pt-16 sm:px-5 sm:pb-20 sm:pt-20"
    >
      <div className="mx-auto w-full max-w-[74rem]">
        <div className="mx-auto max-w-[30rem] text-center">
          <h2 className="font-serif text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.045em] text-[#17231f] sm:text-[2.7rem]">
            {t("atlasTitle")}
          </h2>
        </div>

        <AtlasGrid className="mt-8 sm:mt-10" />
      </div>
    </section>
  );
}
