import type { Metadata } from "next";
import Hero from "./components/Hero";
import GameSelection from "./components/GameSelection";
import PanelShowcase from "./components/PanelShowcase";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

export const metadata: Metadata = {
  title: "HostGame 專業遊戲伺服器託管 | 首頁",
  description: "提供專業的 Minecraft、ARK Survival Evolved、Rust、DayZ 遊戲伺服器託管服務。抗 DDoS 攻擊，99% 穩定運行，12/7 客服支援，台灣、香港、新加坡節點可選。",
};

export default function Home() {
  return (
    <>
      <Hero />
      <GameSelection />
      <PanelShowcase />
      <Features />
      <FAQ />
    </>
  );
}
