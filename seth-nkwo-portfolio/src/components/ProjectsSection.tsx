// Projects Section
"use client"

import { ProjectSectionProps } from "@/types/projects";
import { PROJECTS } from "@/lib/projects";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection({ selectedProject, setSelectedProject }: ProjectSectionProps) {
    const featuredProjects = PROJECTS.filter((p) => p.featured);
    return (
        <section id="projects" className="py-28 px-6 bg-white/2">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-violet-400 text-sm uppercase tracking-widest">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">Featured Projects</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.title}
                            className="group bg-[#0f0f18] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={1080}
                                    height={720}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-base font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 text-center text-xs py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
                                    >
                                        View Details
                                    </button>
                                    {project.github && project.github !== "#" && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
                                            title="View Code"
                                        >
                                            <FaGithub size={14} />
                                        </a>
                                    )}
                                    {(project.live || project.video) && (
                                        <a
                                            href={(project.live || project.video) as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-violet-400 transition-colors"
                                            title={project.live ? "Live Demo" : "Watch Video"}
                                        >
                                            {project.live ? (
                                                <ExternalLink className="size-3.5" />
                                            ) : (
                                                <Play className="size-3.5" />
                                            )}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 transition-all text-sm"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    )
}