import type { Metadata } from "next";
import AboutHero from './components/AboutHero'
import AboutMission from './components/AboutMission'
import AboutTimeline from './components/AboutTimeline'
import AboutCTA from './components/AboutCTA'

export const metadata: Metadata = {
  title: "關於我們 | HostGame 專業遊戲伺服器託管",
  description: "了解 HostGame 遊戲伺服器託管服務的發展歷程、使命願景與專業團隊。我們致力於提供最優質的 Minecraft、ARK、Rust、DayZ 伺服器託管服務，服務超過 100 位滿意玩家。",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <AboutMission />
      <AboutTimeline />
      <AboutCTA />
    </main>
  )
}