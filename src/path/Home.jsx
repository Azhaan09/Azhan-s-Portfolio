import React from 'react'
import ThemeToggles from '../components/ThemeToggles'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import CertificationSection from '../components/CertificationSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground ">
      {/*theme toggle*/}
        <ThemeToggles />
      {/*background effect */}
        <StarBackground />
      {/*navbar */}
        <Navbar />
      {/*main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationSection />
            <ContactSection />
        </main>
      {/*footer */}
        <Footer />
    </div>
  )
}

export default Home
