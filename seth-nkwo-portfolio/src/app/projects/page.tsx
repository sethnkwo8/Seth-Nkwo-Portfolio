// Projects Page
"use client"

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Construction } from "lucide-react";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white py-24 px-6 flex flex-col items-center justify-center">
            <div className="max-w-3xl mx-auto text-center">
                {/* Navigation Back */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-violet-400 transition-colors mb-12"
                >
                    <ArrowLeft className="size-4" />
                    Back to Home
                </Link>

                {/* Icon & Heading */}
                <div className="mb-8 flex justify-center">
                    <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20">
                        <Construction className="size-12 text-violet-400" />
                    </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                    Projects <span className="text-violet-400">Coming Soon</span>
                </h1>

                <p className="text-white/50 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
                    I'm currently curating my best work and case studies. Check back soon
                    to see my latest builds in Next.js, FastAPI, and more.
                </p>

                {/* Call to Action or Socials */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/#contact"
                        className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-colors w-full sm:w-auto"
                    >
                        Get in touch
                    </Link>
                    <a
                        href="https://github.com/sethnkwo8"
                        target="_blank"
                        className="px-8 py-3 rounded-full border border-white/10 hover:border-white/20 text-white/70 hover:text-white text-sm transition-all w-full sm:w-auto"
                    >
                        Check my GitHub
                    </a>
                </div>
            </div>

            {/* Subtle Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 blur-[120px] pointer-events-none" />
        </div>
    );
    // );
    // <div className="min-h-screen bg-[#0a0a0f] text-white py-24 px-6">
    //     <div className="max-w-6xl mx-auto">
    //         <Link
    //             href="/"
    //             className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-violet-400 transition-colors mb-8"
    //         >
    //             <ArrowLeft className="size-4" />
    //             Back to Home
    //         </Link>

    //         <div className="mb-12">
    //             <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
    //             <p className="text-white/50 text-lg">
    //                 Explore my complete portfolio of work across web, mobile, and SaaS applications.
    //             </p>
    //         </div>

    //         <div className="flex flex-wrap gap-3 mb-12">
    //             {categories.map((category) => (
    //                 <button
    //                     key={category}
    //                     onClick={() => setFilter(category)}
    //                     className={`px-4 py-2 rounded-full text-sm transition-all ${filter === category
    //                             ? "bg-violet-600 text-white"
    //                             : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
    //                         }`}
    //                 >
    //                     {category === "all" ? "All Projects" : category}
    //                 </button>
    //             ))}
    //         </div>

    //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    //             {filteredProjects.map((project) => (
    //                 <div
    //                     key={project.id}
    //                     className="group bg-[#0f0f18] border border-white/5 rounded-2xl overflow-hidden hover:border-violet-500/30 transition-all duration-300"
    //                 >
    //                     <div className="aspect-video overflow-hidden">
    //                         <img
    //                             src={project.image}
    //                             alt={project.title}
    //                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    //                         />
    //                     </div>
    //                     <div className="p-5">
    //                         <div className="flex items-start justify-between gap-2 mb-2">
    //                             <h3 className="text-base font-semibold text-white">{project.title}</h3>
    //                             {project.featured && (
    //                                 <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-xs shrink-0">
    //                                     Featured
    //                                 </span>
    //                             )}
    //                         </div>
    //                         <p className="text-xs text-white/30 mb-2">{project.category} • {project.year}</p>
    //                         <p className="text-sm text-white/40 leading-relaxed mb-4">{project.description}</p>
    //                         <div className="flex flex-wrap gap-1.5 mb-5">
    //                             {project.tags.slice(0, 3).map((tag) => (
    //                                 <span
    //                                     key={tag}
    //                                     className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20"
    //                                 >
    //                                     {tag}
    //                                 </span>
    //                             ))}
    //                             {project.tags.length > 3 && (
    //                                 <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-white/30">
    //                                     +{project.tags.length - 3}
    //                                 </span>
    //                             )}
    //                         </div>
    //                         <div className="flex items-center gap-3">
    //                             <button
    //                                 onClick={() => setSelectedProject(project)}
    //                                 className="flex-1 text-center text-xs py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors"
    //                             >
    //                                 View Details
    //                             </button>
    //                             <a
    //                                 href={project.github}
    //                                 className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"
    //                                 title="View Code"
    //                             >
    //                                 <FaGithub size={14} />
    //                             </a>
    //                             <a
    //                                 href={project.live}
    //                                 className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-violet-400 transition-colors"
    //                                 title="Live Demo"
    //                             >
    //                                 <ExternalLink className="size-3.5" />
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>

    //         {filteredProjects.length === 0 && (
    //             <div className="text-center py-20">
    //                 <p className="text-white/30 text-lg">No projects found in this category.</p>
    //             </div>
    //         )}
    //     </div>

    //     {/* <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} /> */}
    // </div>
}