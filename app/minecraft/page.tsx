import type { Metadata } from "next";
import MinecraftHero from "./components/MinecraftHero";
import MinecraftPromoBanner from "./components/MinecraftPromoBanner";
import MinecraftFeatures from "./components/MinecraftFeatures";
import MinecraftHighlights from "./components/MinecraftHighlights";
import MinecraftFAQ from "./components/MinecraftFAQ";

export const metadata: Metadata = {
  title: "Minecraft 伺服器託管 | HostGame 專業遊戲伺服器託管",
  description: "專業 Minecraft 伺服器託管服務，Java 版、Bedrock 基岩版皆支援。低延遲、高穩定性，抗 DDoS 攻擊，台灣、香港、新加坡節點可選。台灣最佳託管平台。",
};

export default function MinecraftPage() {
  return (
    <>
      <MinecraftHero />
      <MinecraftFeatures />
      <MinecraftHighlights />
    </>
  );
}