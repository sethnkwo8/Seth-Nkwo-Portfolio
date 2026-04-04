// Home component
"use client"

import { HeroSection } from "./HeroSection"
import { AboutSection } from "./AboutSection"
import { ProjectsSection } from "./ProjectsSection"
import { SkillsSection } from "./SkillsSection"
import { ContactSection } from "./ContactSection"
import { ProjectDetailModal } from "./ProjectDetailModal"
import { useState } from "react"
import { Project } from "@/types/projects"

export function Home() {
    // State for selected project
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            {/* Hero Section */}
            <HeroSection />
            {/* About Section */}
            <AboutSection />
            {/* Projects Section */}
            <ProjectsSection selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
            {/* Skills Section */}
            <SkillsSection />
            {/* Contact Section */}
            <ContactSection />
            {/* Project Detail Modal */}
            <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </>
    )
}