// Home component
"use client"

import { HeroSection } from "./HeroSection"
import { AboutSection } from "./AboutSection"
import { ProjectsSection } from "./ProjectsSection"
import { SkillsSection } from "./SkillsSection"
import { ContactSection } from "./ContactSection"
import { ProjectDetailModal } from "./ProjectDetailModal"

export function Home() {

    return (
        <>
            {/* Hero Section */}
            <HeroSection />
            {/* About Section */}
            <AboutSection />
            {/* Projects Section */}
            <ProjectsSection />
            {/* Skills Section */}
            <SkillsSection />
            {/* Contact Section */}
            <ContactSection />
            {/* Project Detail Modal */}
            <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    )
}