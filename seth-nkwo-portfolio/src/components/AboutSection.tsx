// About section

export function About() {
    return (
        <section id="about" className="py-28 px-6">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1651684195895-38708dc94cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MjYwNDIyNXww&ixlib=rb-4.1.0&q=80&w=1080"
                            alt="workspace"
                            className="w-full h-full object-cover"
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
                        Crafting digital experiences with purpose
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-4">
                        I'm a full-stack developer based in San Francisco with 5+ years of experience building web and mobile
                        products. I love working at the intersection of design and engineering to create interfaces that are both
                        beautiful and functional.
                    </p>
                    <p className="text-white/50 leading-relaxed mb-8">
                        When I'm not coding, you'll find me hiking the trails of Marin County, experimenting with film
                        photography, or reading about system design.
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