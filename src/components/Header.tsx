"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Tracks", href: "#courses" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 w-full max-w-[1360px] items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* Logo */}
        <Link
          href="#top"
          aria-label="Codemantix home"
          className="flex items-center transition-opacity hover:opacity-90"
        >
          <Image
            src="/bootcamp landing page design/bootcamp landing page design/codemantix logo png 2.png"
            alt="Codemantix Collective"
            width={175}
            height={46}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
        </Link>

        {/* Center Pill Nav */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 rounded-full border border-slate-300 bg-white/80 px-8 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.03)] lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-montserrat)] text-[14px] font-semibold text-[#1e293b] transition-colors hover:text-[#1d3d8f]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="https://forms.gle/mekayJoQZjgNDJ4x5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[42px] items-center justify-center gap-2 rounded-full bg-[#1b357e] px-6 font-[family-name:var(--font-montserrat)] text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(27,53,126,0.38)] transition-all hover:bg-[#152a65] hover:shadow-[0_10px_25px_rgba(27,53,126,0.48)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Apply Now <span className="text-base font-normal">→</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-xl text-[#1e3a8a] transition-colors hover:bg-slate-50 lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-b border-slate-100 px-6 pb-6 pt-2 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 font-[family-name:var(--font-montserrat)] text-base font-semibold text-[#1e293b] hover:bg-slate-50 hover:text-[#1d3d8f]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
