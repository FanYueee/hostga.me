import RustHero from "./components/RustHero";
import RustPromoBanner from "./components/RustPromoBanner";
import RustFeatures from "./components/RustFeatures";
import RustHighlights from "./components/RustHighlights";
import RustFAQ from "./components/RustFAQ";

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