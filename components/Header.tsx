"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/cn";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Resources", href: "/resources" },
  { label: "Consultation", href: "/consultation" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-ink-200" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10 py-4 lg:py-5">
        {/* Brand — left edge */}
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="h-display text-xl text-ink-800 tracking-tight">
            {siteConfig.brand.name}
          </span>
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.2em] text-ink-500">
            Operational Readiness
          </span>
        </Link>

        {/* Nav — center / right edge */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-700 hover:text-ink-900 transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-sand-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA — right edge */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-ink-900 text-white hover:bg-ink-800 transition-colors"
          >
            Book Consultation
            <span aria-hidden>→</span>
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-ink-200"
          >
            <span className="h-display text-lg">{open ? "×" : "≡"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-ink-200">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink-800"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/consultation"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-3 rounded-full bg-ink-900 text-white"
            >
              Book Consultation →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
