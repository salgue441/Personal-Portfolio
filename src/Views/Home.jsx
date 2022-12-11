// Components
import HeroSection from "../Components/HeroSections/HeroSection/HeroSection"
import AboutSection from "../Components/HeroSections/AboutSection/AboutSection"
import ServicesSection from "../Components/HeroSections/ServicesSection/ServicesSection"
import ProjectsSection from "../Components/HeroSections/ProjectsSection/ProjectSection"
import ContactSection from "../Components/HeroSections/ContactSection/ContactSection"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

export default Home
