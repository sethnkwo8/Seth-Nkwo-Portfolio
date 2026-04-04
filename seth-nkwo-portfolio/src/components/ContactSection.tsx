// Contact sectiom
"use client"

import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function ContactSection() {
    return (
        <section id="contact" className="py-28 px-6 bg-white/2">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-violet-400 text-sm uppercase tracking-widest">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Let's Work Together</h2>
                    <p className="text-white/40 mb-10 leading-relaxed">
                        Have a project in mind? My inbox is always open. I'll get back to you within 24
                        hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Contact Info Cards */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="mailto:alex@example.com"
                                className="group bg-[#0f0f18] border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-600/30 transition-colors">
                                        <Mail className="size-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 mb-1">Email</div>
                                        <div className="text-sm text-white/80 group-hover:text-violet-400 transition-colors">
                                            sethnkwo@yahoo.com
                                            sethnkwocool@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <a
                                href="tel:+2347073845982"
                                className="group bg-[#0f0f18] border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-600/30 transition-colors">
                                        <Phone className="size-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 mb-1">Phone</div>
                                        <div className="text-sm text-white/80 group-hover:text-violet-400 transition-colors">
                                            +234 7073845982
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div className="bg-[#0f0f18] border border-white/5 rounded-xl p-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0">
                                        <MapPin className="size-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 mb-1">Location</div>
                                        <div className="text-sm text-white/80">Rivers, Nigeria</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#0f0f18] border border-white/5 rounded-xl p-5">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0">
                                        <Clock className="size-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 mb-1">Response Time</div>
                                        <div className="text-sm text-white/80">Within 24 hours</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#0f0f18] border border-white/5 rounded-xl p-5 mt-6">
                            <div className="text-sm text-white/60 mb-3">Connect on social media</div>
                            <div className="flex items-center gap-3">
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    <FaGithub size={16} />
                                    GitHub
                                </Link>
                                <Link
                                    href="#"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    <FaLinkedin size={16} />
                                    LinkedIn
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                        <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs text-white/40 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-xs text-white/40 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs text-white/40 mb-1.5">Subject</label>
                            <input
                                type="text"
                                placeholder="Project inquiry"
                                className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs text-white/40 mb-1.5">Message</label>
                            <textarea
                                rows={6}
                                placeholder="Tell me about your project..."
                                className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-sm transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}