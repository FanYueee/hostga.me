import MinecraftHero from "./components/MinecraftHero";
import MinecraftPromoBanner from "./components/MinecraftPromoBanner";
import MinecraftFeatures from "./components/MinecraftFeatures";
import MinecraftHighlights from "./components/MinecraftHighlights";
import MinecraftFAQ from "./components/MinecraftFAQ";

export default function MinecraftPage() {
  return (
    <>
      <MinecraftHero />
      <MinecraftFeatures />
      <MinecraftHighlights />
    </>
  );
}