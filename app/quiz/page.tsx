import type { Metadata } from "next";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteLogo } from "@/components/site-logo";
import { QuizClient } from "@/components/quiz/quiz-client";

export const metadata: Metadata = {
  title: "开始测试",
  description: "按答案匹配你更贴近的 NCT CP 人格结果。",
};

export default function QuizPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-3">
          <SiteLogo />
          <div className="flex justify-end">
            <LanguageSwitcher />
          </div>
        </div>
      </header>
      <QuizClient />
    </div>
  );
}
