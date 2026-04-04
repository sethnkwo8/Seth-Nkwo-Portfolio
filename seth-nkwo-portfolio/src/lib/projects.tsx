import { Project } from "@/types/projects";

// Projects data
export const PROJECTS: Project[] = [
    {
        id: "allocare",
        title: "Allocare",
        description: "A full-stack budgeting and allocation platform that helps people make intentional decisions with their income.",
        fullDescription: "Allocare is a modern personal finance management application designed to help users track income, manage expenses, and optimize budget allocation using a structured approach.",
        image: "/projects/allocare.png",
        tags: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
        github: "https://github.com/sethnkwo8/Allocare",
        live: "#",
        featured: true,
        category: "Web Application",
        year: "2025",
        role: "Lead Developer",
        challenges: [
        ],
    },
    {
        id: "gameday-stats",
        title: "Gameday Stats",
        description: "Django web application that gives you updated match results, standings, info and player details for Europe's top 5 football leagues.",
        fullDescription: "Gameday Stats is a full-stack web application built with Django that provides live football (soccer) data — including fixtures, scores, standings, and player statistics — for the top five European leagues",
        image: "/projects/gameday-stats.png",
        tags: ["JavaScript", "Django", "Render", "PostgreSQL", "External APIs"],
        github: "https://github.com/sethnkwo8/Gameday-Stats",
        video: "https://youtu.be/bofClOn7viM",
        featured: true,
        category: "Web Application",
        year: "2025",
        role: "Lead Developer",
        challenges: [
        ],
    },
    {
        id: "bondex-bridge",
        title: "Bondex Bridge Terminal Website (Client project)",
        description: "A modern corporate website built for a logistics and maritime services company.",
        fullDescription: "A responsive business website designed to present company services, contact information, and operational capabilities in a clean and professional layout. Developed as a client project with focus on performance, usability, and modern UI design.",
        image: "/projects/bondex-bridge.png",
        tags: ["Next.js", "Tailwind CSS", "Vercel", "Cloudflare"],
        github: "https://github.com/sethnkwo8/Bondex-Bridge",
        live: "https://www.bondexbridgeterminal.com",
        featured: true,
        category: "Web Application",
        year: "2025",
        role: "Lead Developer",
        challenges: [
        ],
    },
]