import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteLogo } from "@/components/site-logo";

export function HomeBrandBar() {
  return (
    <header className="border-b border-[var(--line)]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
        <SiteLogo />
        <div className="flex justify-end">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
