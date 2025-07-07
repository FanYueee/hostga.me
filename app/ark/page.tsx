import ArkHero from "./components/ArkHero";
import ArkPromoBanner from "./components/ArkPromoBanner";
import ArkFeatures from "./components/ArkFeatures";
import ArkHighlights from "./components/ArkHighlights";
import ArkFAQ from "./components/ArkFAQ";

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