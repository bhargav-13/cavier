import Navbar from './components/home/Navbar.jsx'
import Hero from './components/home/Hero.jsx'
import IntroSection from './components/home/IntroSection.jsx'
import Features from './components/home/Features.jsx'
import CraftSection from './components/home/CraftSection.jsx'
import FinishingSection from './components/home/FinishingSection.jsx'
import SinkMixersSection from './components/home/SinkMixersSection.jsx'
import AccessSection from './components/home/AccessSection.jsx'
import HomeExperienceSection from './components/home/HomeExperienceSection.jsx'
import HomeInsightsSection from './components/home/HomeInsightsSection.jsx'
import Footer from './components/home/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen selection:bg-white selection:text-black font-sans">
      <Navbar />
      <Hero />
      <IntroSection />
      <Features />
      <CraftSection />
      <FinishingSection />
      <SinkMixersSection />
      <AccessSection />
     
      <HomeInsightsSection />
       <HomeExperienceSection />
      <Footer />
    </div>
  )
}
