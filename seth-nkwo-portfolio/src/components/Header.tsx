// Header
"use client"

import Link from "next/link"
import { X, Menu } from "lucide-react"
import { NAV_LINKS } from "@/lib/navlinks"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Header() {
    // Pathname constant
    const pathname = usePathname()

    // Home page path constant
    const isHomePage = pathname === "/"

    // State for menu
    const [menuOpen, setMenuOpen] = useState(false);

    // State for scrolled
    const [scrolled, setScrolled] = useState(false);

    // Function to handle nav click
    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        if (href.startsWith("/#")) {
            const id = href.substring(2);
            if (isHomePage) {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = href;
            }
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5" : ""
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-lg font-semibold tracking-tight text-white">
                    Seth<span className="text-violet-400">.</span>dev
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) =>
                        link.href.startsWith("/#") ? (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm transition-colors hover:text-violet-400 text-white/60"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm transition-colors hover:text-violet-400 ${pathname === link.href ? "text-violet-400" : "text-white/60"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                    <button
                        onClick={() => handleNavClick("/#contact")}
                        className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 transition-colors"
                    >
                        Hire Me
                    </button>
                </nav>

                {/* Mobile */}
                <button className="md:hidden text-white/70" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="md:hidden bg-[#0d0d14] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
                    {NAV_LINKS.map((link) =>
                        link.href.startsWith("/#") ? (
                            <button
                                key={link.name}
                                onClick={() => handleNavClick(link.href)}
                                className="text-left text-sm text-white/70 hover:text-violet-400 transition-colors"
                            >
                                {link.name}
                            </button>
                        ) : (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="text-left text-sm text-white/70 hover:text-violet-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        )
                    )}
                </div>
            )}
        </header>
    )
}