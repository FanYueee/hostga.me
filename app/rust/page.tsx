import type { Metadata } from "next";
import RustHero from "./components/RustHero";
import RustPromoBanner from "./components/RustPromoBanner";
import RustFeatures from "./components/RustFeatures";
import RustHighlights from "./components/RustHighlights";
import RustFAQ from "./components/RustFAQ";

export const metadata: Metadata = {
  title: "Rust 伺服器託管 | HostGame 專業遊戲伺服器託管",
  description: "專業 Rust 伺服器託管服務，亞洲香港節點。低延遲、高穩定性，抗 DDoS 攻擊。",
};

export default function RustPage() {
  return (
    <>
      <RustHero />
      <RustPromoBanner />
      <RustFeatures />
      <RustHighlights />
      <RustFAQ />
    </>
  );
}