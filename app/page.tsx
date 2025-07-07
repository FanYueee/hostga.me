import Hero from "./components/Hero";
import GameSelection from "./components/GameSelection";
import PanelShowcase from "./components/PanelShowcase";
import Features from "./components/Features";
import FAQ from "./components/FAQ";

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
