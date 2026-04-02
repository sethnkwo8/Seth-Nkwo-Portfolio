// Footer
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-white/30">© 2026 Alex Chen. All rights reserved.</span>
                <div className="flex items-center gap-5">
                    {[
                        { icon: <FaGithub size={16} />, href: "#" },
                        { icon: <FaLinkedin size={16} />, href: "#" },
                        { icon: <Mail className="size-4" />, href: "#" },
                    ].map((s, i) => (
                        <a key={i} href={s.href} className="text-white/30 hover:text-violet-400 transition-colors">
                            {s.icon}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}
