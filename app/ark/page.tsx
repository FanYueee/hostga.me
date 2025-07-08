import type { Metadata } from "next";
import ArkHero from "./components/ArkHero";
import ArkPromoBanner from "./components/ArkPromoBanner";
import ArkFeatures from "./components/ArkFeatures";
import ArkHighlights from "./components/ArkHighlights";
import ArkFAQ from "./components/ArkFAQ";

export const metadata: Metadata = {
  title: "ARK 方舟生存進化伺服器託管 | HostGame 專業遊戲伺服器託管",
  description: "專業 ARK Survival Evolved 伺服器主機託管服務，低延遲、高穩定性，亞洲香港節點。",
};

export default function ArkPage() {
  return (
    <>
      <ArkHero />
      <ArkPromoBanner />
      <ArkFeatures />
      <ArkHighlights />
      <ArkFAQ />
    </>
  );
}