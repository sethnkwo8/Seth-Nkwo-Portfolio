// Skills section

import { Database, Server, Settings } from "lucide-react";
import { FaReact } from "react-icons/fa";

export function SkillsSection() {
    return (
        <section id="skills" className="py-28 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-violet-400 text-sm uppercase tracking-widest">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Skills & Technologies</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        {
                            category: "Frontend",
                            icon: <FaReact size={20} />,
                            items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
                        },
                        {
                            category: "Backend",
                            icon: <Server className="size-5" />,
                            items: ["Python", "Django", "Flask", "FastAPI", "Node.js (Learning)", "REST APIs"],
                        },
                        {
                            category: "Databases & ORM",
                            icon: <Database className="size-5" />,
                            items: ["PostgreSQL", "SQLite", "Prisma", "SQLModel"],
                        },
                        {
                            category: "Tools",
                            icon: <Settings className="size-5" />,
                            items: ["Git", "Figma", "Postman", "Github Actions", "Docker (Learning)", "AWS (Learning)"],
                        },
                    ].map((skill) => (
                        <div
                            key={skill.category}
                            className="bg-[#0f0f18] border border-white/5 rounded-2xl p-6 hover:border-violet-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-2.5 mb-5">
                                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400">
                                    {skill.icon}
                                </div>
                                <span className="text-sm font-medium text-white">{skill.category}</span>
                            </div>
                            <ul className="space-y-2.5">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-white/50">
                                        <span className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}