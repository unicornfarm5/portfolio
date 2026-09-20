import { About } from '../components/About.jsx'
import { BannerQuote } from '../components/BannerQuote.jsx'
import { ContactSection } from '../components/ContactSection.jsx'
import { Experience } from '../components/Experience.jsx'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'
import { HeroSection } from '../components/HeroSection.jsx'
import { HowIWorkSection } from '../components/HowIWorkSection.jsx'
import { InternshipSection } from '../components/InternshipSection.jsx'
import { ProjectsSection } from '../components/ProjectsSection.jsx'

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <HeroSection />
        <BannerQuote />
        <About />
        <Experience />
        <ProjectsSection />
        <HowIWorkSection />
        <InternshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}