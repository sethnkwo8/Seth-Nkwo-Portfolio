// Home Page
import { About } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <SkillsSection />
      {/* Contact Section */}
      <ContactSection />
    </>
  )
}