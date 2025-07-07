import PartnersHero from './components/PartnersHero'
import PartnersAdvantages from './components/PartnersAdvantages'
import PartnersContact from './components/PartnersContact'

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white">
      <PartnersHero />
      <PartnersAdvantages />
      <PartnersContact />
    </main>
  )
}