// Skills data
import { Database, Server, Settings, Shield } from "lucide-react";
import { FaReact } from "react-icons/fa";

export const skills =
    [
        {
            category: "Frontend",
            icon: <FaReact size={20} />,
            items: [
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "HTML/CSS"
            ],
        },
        {
            category: "Backend",
            icon: <Server className="size-5" />,
            items: [
                "Python",
                "Django",
                "Flask",
                "FastAPI",
                "Node.js (Express)",
                "REST APIs"
            ],
        },
        {
            category: "Databases & ORM",
            icon: <Database className="size-5" />,
            items: [
                "PostgreSQL",
                "SQLite",
                "MongoDB",
                "Supabase",
                "Prisma",
                "SQLModel"
            ],
        },
        {
            category: "DevOps & Infrastructure Tools",
            icon: <Settings className="size-5" />,
            items: [
                "AWS (EC2, S3, Route 53, IAM, ALB)",
                "Multi-Region Network Latency Design",
                "Docker & Docker Compose",
                "GitHub Actions (CI/CD)",
                "Linux / Shell Scripting",
                "Git / GitHub"
            ],
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