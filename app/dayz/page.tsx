import type { Metadata } from "next";
import DayzHero from "./components/DayzHero";
import DayzPromoBanner from "./components/DayzPromoBanner";
import DayzFeatures from "./components/DayzFeatures";
import DayzHighlights from "./components/DayzHighlights";
import DayzFAQ from "./components/DayzFAQ";

export const metadata: Metadata = {
  title: "DayZ 伺服器託管 | HostGame 專業遊戲伺服器託管",
  description: "專業 DayZ 伺服器託管服務，體驗喪屍末日生存遊戲。開放世界、生存要素、喪屍威脅、真實物理引擎。高穩定性硬體，抗 DDoS 攻擊，亞洲香港節點。",
};

export default function DayzPage() {
  return (
    <>
      <DayzHero />
      <DayzPromoBanner />
      <DayzFeatures />
      <DayzHighlights />
      <DayzFAQ />
    </>
  );
}