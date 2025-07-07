import DayzHero from "./components/DayzHero";
import DayzPromoBanner from "./components/DayzPromoBanner";
import DayzFeatures from "./components/DayzFeatures";
import DayzHighlights from "./components/DayzHighlights";
import DayzFAQ from "./components/DayzFAQ";

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