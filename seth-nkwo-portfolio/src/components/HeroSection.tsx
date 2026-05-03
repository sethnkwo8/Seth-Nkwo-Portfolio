// Hero Section
"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-violet-600/10 blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 w-75 h-75 rounded-full bg-indigo-600/10 blur-[100px]" />
            </div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-4xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                    Available for freelance work
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    Hi, I&apos;m{" "}
                    <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                        Seth Nkwo
                    </span>
                </h1>
                <p className="text-xl md:text-2xl text-white/50 mb-4">Full-Stack Developer</p>
                <p className="text-base text-white/40 max-w-xl mx-auto mb-10 leading-relaxed">
                    I build scalable full-stack applications with clean architecture, strong backend logic, and intuitive user experiences.
                </p>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => scrollTo("projects")}
                        className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm transition-colors"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollTo("contact")}
                        className="px-6 py-3 rounded-full border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-sm transition-all"
                    >
                        Get In Touch
                    </button>
                </div>
                <div className="flex items-center justify-center gap-5 mt-10">
                    {[
                        { icon: <FaGithub size={16} />, href: "https://github.com/sethnkwo8" },
                        { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/seth-nkwo" },
                        { icon: <Mail className="size-4" />, href: "mailto:sethnkwo@yahoo.com" },
                    ].map((s, i) => (
                        <Link key={i} href={s.href} className="text-white/30 hover:text-violet-400 transition-colors">
                            {s.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
