// Project Detail Modal
"use client"

import { X, ExternalLink, Tag, User, Calendar, Play } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { ProjectDetailModalProps } from "@/types/projects";

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f0f18] border border-white/10 rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white transition-colors"
                >
                    <X className="size-5" />
                </button>

                <div className="overflow-y-auto max-h-[90vh]">
                    <div className="aspect-video w-full overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                                <p className="text-violet-400 text-sm">{project.category}</p>
                            </div>
                            <div className="flex gap-3">
                                {project.github && project.github !== "#" && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-sm"
                                    >
                                        <FaGithub size={16} />
                                        Code
                                    </a>
                                )}
                                {(project.live || project.video) && (
                                    <a
                                        href={(project.live || project.video) as string}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors text-sm"
                                        title={project.live ? "Live Demo" : "Watch Video"}
                                    >
                                        {project.live ? (
                                            <ExternalLink className="size-4" />
                                        ) : (
                                            <Play className="size-4" />
                                        )}
                                        {project.live ? " Live Demo" : " Video Demo"}
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm">
                                <Calendar className="size-4 text-violet-400" />
                                <span className="text-white/40">Year:</span>
                                <span className="text-white">{project.year}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <User className="size-4 text-violet-400" />
                                <span className="text-white/40">Role:</span>
                                <span className="text-white">{project.role}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <Tag className="size-4 text-violet-400" />
                                <span className="text-white/40">Category:</span>
                                <span className="text-white">{project.category}</span>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-3">Overview</h3>
                            <p className="text-white/60 leading-relaxed">{project.fullDescription}</p>
                        </div>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 text-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.challenges && project.challenges.length > 0 && (
                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-white mb-3">Key Challenges</h3>
                                <ul className="space-y-2">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start gap-3 text-white/60">
                                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-2" />
                                            <span>{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.outcomes && project.outcomes.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Outcomes & Impact</h3>
                                <ul className="space-y-2">
                                    {project.outcomes.map((outcome, index) => (
                                        <li key={index} className="flex items-start gap-3 text-white/60">
                                            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0 mt-2" />
                                            <span>{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
