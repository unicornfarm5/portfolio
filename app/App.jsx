import { useEffect, useState } from 'react'
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
import { ProjectsPage } from '../components/ProjectsPage.jsx'

export default function App() {
  const [locationHash, setLocationHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setLocationHash(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const isProjectsPage = pathname === '/projects' || locationHash.startsWith('#/projects')

  return (
    <div className="site-shell">
      <Header />
      {isProjectsPage ? (
        <main><ProjectsPage /></main>
      ) : (
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
      )}
      <Footer />
    </div>
  )
}