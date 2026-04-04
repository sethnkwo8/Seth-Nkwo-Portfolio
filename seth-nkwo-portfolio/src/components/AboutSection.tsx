// About section
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                        <Image
                            src="https://images.unsplash.com/photo-1651684195895-38708dc94cfa?..."
                            alt="workspace"
                            fill
                            className="object-cover"
                            // 3. Optimized sizes for a half-column layout
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-[#13131c] border border-white/10 rounded-xl p-4 flex items-center gap-3 shadow-xl">
                        <div className="w-10 h-10 rounded-full bg-violet-600/20 flex items-center justify-center text-violet-400 text-lg font-bold">
                            3+
                        </div>
                        <div>
                            <div className="text-xs text-white/40">Years of</div>
                            <div className="text-sm text-white">Experience</div>
                        </div>
                    </div>
                    <div className="absolute -top-4 -left-4 bg-[#13131c] border border-white/10 rounded-xl p-4 shadow-xl">
                        <div className="text-xs text-white/40 mb-0.5">Projects Done</div>
                        <div className="text-xl font-bold text-white">16+</div>
                    </div>
                </div>
                <div>
                    <span className="text-violet-400 text-sm uppercase tracking-widest">About Me</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 leading-tight">
                        Building real-world applications with clean architecture
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-4">
                        I'm a full-stack developer focused on building scalable web applications with strong backend systems and clean architecture. I work primarily with Next.js, Django and FastAPI, creating applications that are both functional and easy to maintain.
                    </p>
                    <p className="text-white/50 leading-relaxed mb-8">
                        Recently, I've been developing projects like Allocare, a personal finance app that emphasizes structured budgeting and real-world usability. I'm continuously improving my skills by building, shipping, and refining practical applications.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: "Location", value: "Rivers, Nigeria" },
                            { label: "Availability", value: "Freelance / Contract / Full-time" },
                            { label: "Focus", value: "Full Stack Applications & AI/ML" },
                            { label: "Education", value: "Nile University of Nigeria, Nigeria" },
                        ].map((item) => (
                            <div key={item.label} className="bg-white/3 border border-white/5 rounded-lg p-3">
                                <div className="text-xs text-white/30 mb-1">{item.label}</div>
                                <div className="text-sm text-white/80">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}