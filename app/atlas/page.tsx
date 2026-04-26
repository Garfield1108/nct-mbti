import type { Metadata } from "next";
import { AtlasClient } from "@/components/atlas/atlas-client";
import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "NCT CP 人格测试结果图鉴",
  description: "15 种 NCT CP 关系类型速览。",
};

export default function AtlasPage() {
  return (
    <PageShell
      headerTitle="NCT CP 人格测试结果图鉴"
      headerTitleEn="NCT CP Result Atlas"
    >
      <AtlasClient />
    </PageShell>
  );
}
