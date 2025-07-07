import AboutHero from './components/AboutHero'
import AboutMission from './components/AboutMission'
import AboutTimeline from './components/AboutTimeline'
import AboutCTA from './components/AboutCTA'

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