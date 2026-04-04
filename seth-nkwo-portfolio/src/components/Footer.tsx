// Footer
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t border-white/5 py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm text-white/30">© 2026 Seth Nkwo. All rights reserved.</span>
                <div className="flex items-center gap-5">
                    {[
                        { icon: <FaGithub size={16} />, href: "https://github.com/sethnkwo8" },
                        { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/seth-nkwo" },
                        { icon: <Mail className="size-4" />, href: "mailto:sethnkwo@yahoo.com" },
                    ].map((s, i) => (
                        <Link key={i} href={s.href} target="_blank" className="text-white/30 hover:text-violet-400 transition-colors">
                            {s.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}
