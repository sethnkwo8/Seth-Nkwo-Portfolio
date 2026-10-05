// Contact section
"use client"

import { useState, type FormEvent } from "react"
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

type FormStatus = "idle" | "loading" | "success" | "error"

export function ContactSection() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState<FormStatus>("idle")
    const [errorMessage, setErrorMessage] = useState("")

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setStatus("loading")
        setErrorMessage("")

        const form = e.currentTarget
        const website = (form.elements.namedItem("website") as HTMLInputElement | null)?.value ?? ""

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, subject, message, website }),
            })

            const data = (await res.json().catch(() => ({}))) as { error?: string }

            if (!res.ok) {
                setStatus("error")
                setErrorMessage(data.error ?? "Something went wrong. Please try again.")
                return
            }

            setStatus("success")
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        } catch {
            setStatus("error")
            setErrorMessage("Network error. Please check your connection and try again.")
        }
    }

    return (
        <section id="contact" className="py-28 px-6 bg-white/2">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-violet-400 text-sm uppercase tracking-widest">Contact</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Let&apos;s Work Together</h2>
                    <p className="text-white/40 mb-10 leading-relaxed">
                        Have a project in mind? My inbox is always open. I&apos;ll get back to you within 24
                        hours.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Contact Info Cards */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <a
                                href="mailto:sethnkwo@yahoo.com"
                                className="group bg-[#0f0f18] border border-white/5 rounded-xl p-5 hover:border-violet-500/30 transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-violet-600/20 flex items-center justify-center text-violet-400 shrink-0 group-hover:bg-violet-600/30 transition-colors">
                                        <Mail className="size-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-white/40 mb-1">Email</div>
                                        <div className="text-sm text-white/80 group-hover:text-violet-400 transition-colors">
                                            sethnkwo@yahoo.com, sethnkwocool@gmail.com
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
                                            <p>+234 7073845982</p>
                                            <p>+234 8097571370</p>
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
                                <a
                                    href="https://github.com/sethnkwo8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    <FaGithub size={16} />
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/seth-nkwo/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    <FaLinkedin size={16} />
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <h3 className="text-lg font-semibold text-white mb-2">Send a Message</h3>

                        <input
                            type="text"
                            name="website"
                            tabIndex={-1}
                            autoComplete="off"
                            className="hidden"
                            aria-hidden
                        />

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contact-name" className="block text-xs text-white/40 mb-1.5">
                                    Name
                                </label>
                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="John Doe"
                                    disabled={status === "loading"}
                                    className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors disabled:opacity-50"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-xs text-white/40 mb-1.5">
                                    Email
                                </label>
                                <input
                                    id="contact-email"
                                    type="email"
                                    name="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="john@example.com"
                                    disabled={status === "loading"}
                                    className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors disabled:opacity-50"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-subject" className="block text-xs text-white/40 mb-1.5">
                                Subject
                            </label>
                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                required
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="Project inquiry"
                                disabled={status === "loading"}
                                className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors disabled:opacity-50"
                            />
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="block text-xs text-white/40 mb-1.5">
                                Message
                            </label>
                            <textarea
                                id="contact-message"
                                name="message"
                                required
                                rows={6}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Tell me about your project..."
                                disabled={status === "loading"}
                                className="w-full bg-white/4 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors resize-none disabled:opacity-50"
                            />
                        </div>

                        {status === "success" && (
                            <p className="text-sm text-emerald-400" role="status">
                                Message sent. I&apos;ll get back to you soon.
                            </p>
                        )}
                        {status === "error" && errorMessage && (
                            <p className="text-sm text-red-400" role="alert">
                                {errorMessage}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-500 disabled:bg-violet-600/60 disabled:cursor-not-allowed text-white text-sm transition-colors flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="size-4 animate-spin" aria-hidden />
                                    Sending…
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
