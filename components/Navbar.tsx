"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF7]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-h3 text-foreground no-underline">
          Cultura <span className="text-accent">en Proyectos</span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/proyectos"
            className="text-small font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider no-underline"
          >
            Proyectos
          </Link>
          <Link
            href="/nosotros"
            className="text-small font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider no-underline"
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="text-small font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider no-underline"
          >
            Contacto
          </Link>
          <a
            href="https://instagram.com/culturaenproyectos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
            aria-label="Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
