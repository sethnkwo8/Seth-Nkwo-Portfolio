// Skills data
import { Database, Server, Settings, Shield } from "lucide-react";
import { FaReact } from "react-icons/fa";

export const skills =
    [
        {
            category: "Frontend",
            icon: <FaReact size={20} />,
            items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
        },
        {
            category: "Backend",
            icon: <Server className="size-5" />,
            items: ["Python", "Django", "Flask", "FastAPI", "Node.js (Express)", "REST APIs"],
        },
        {
            category: "Databases & ORM",
            icon: <Database className="size-5" />,
            items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase", "Prisma", "SQLModel"],
        },
        {
            category: "Tools",
            icon: <Settings className="size-5" />,
            items: ["Git", "Figma", "Postman", "Github Actions", "Docker (Learning)", "AWS (Learning)"],
        },
        {
            category: "Authentication & Security",
            icon: <Shield className="size-5" />,
            items: [
                "JWT Authentication",
                "Google OAuth",
                "HTTP-only Cookies",
                "Refresh Token Architecture",
                "Session Management",
                "bcrypt"
            ],
        },
    ]