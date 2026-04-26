import type { ReactNode } from "react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteLogo } from "@/components/site-logo";

interface PageShellProps {
  children: ReactNode;
  headerTitle?: string;
  headerTitleEn?: string;
}

export function PageShell({
  children,
  headerTitle,
  headerTitleEn,
}: PageShellProps) {
  return (
    <div className="relative min-h-screen overflow-hidden px-2.5 py-2.5 sm:px-4 sm:py-4">
      <div className="mx-auto flex w-full max-w-6xl flex-col rounded-[24px] border border-[var(--line)] bg-white/90 shadow-[0_24px_80px_rgba(28,40,35,0.08)] backdrop-blur sm:rounded-[32px]">
        <header className="border-b border-[var(--line)] px-5 py-4 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <SiteLogo
              showIcon={false}
              showSubtitle={false}
              title={headerTitle}
              titleEn={headerTitleEn}
              className="text-sm font-semibold tracking-[0.08em] text-[var(--ink)]"
            />
            <div className="flex justify-end">
              <LanguageSwitcher />
            </div>
          </div>
        </header>
        <main className="flex flex-col">{children}</main>
      </div>
    </div>
  );
}
