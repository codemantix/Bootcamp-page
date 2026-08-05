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
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-5 pt-3 md:px-7">
      <div className="pointer-events-auto flex h-[60px] w-full max-w-[1100px] items-center justify-between rounded-[14px] bg-white/80 px-[22px] py-[40px] backdrop-blur-[19.8px]">
        <Link href="#top" aria-label="Codemantix home" className="flex h-[66px] w-[192px]">
          <Image src="/bootcamp landing page design/bootcamp landing page design/codemantix logo png 2.png" alt="Codemantix Collective" width={140} height={50} priority className=" object-contain" />
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 rounded-full border border-[#4b61a1] px-[21px] py-[17px] lg:flex">
          {navLinks.map((link) => <Link key={link.label} href={link.href} className="font-[family-name:var(--font-montserrat)] text-[13px] font-bold leading-5 text-[#1b1b1b]">{link.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="hidden h-[38px] items-center justify-center gap-2 rounded-full border border-[#4b61a1] bg-[#1e3a8a] px-[20px] font-[family-name:var(--font-montserrat)] text-[13px] font-bold leading-5 text-white shadow-[0_5px_13.25px_rgba(27,53,126,.68)] sm:flex sm:px-[25px]">Apply Now <span>→</span></Link>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation" className="grid h-11 w-11 place-items-center rounded-full border border-[#dce3f3] text-xl text-[#1e3a8a] lg:hidden">{open ? "×" : "☰"}</button>
        </div>
      </div>
      {open && <nav className="pointer-events-auto absolute left-5 right-5 top-[112px] overflow-hidden rounded-[20px] border border-[#e5eaf7] bg-white p-4 shadow-xl md:left-10 md:right-10 lg:hidden">{navLinks.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block border-b border-[#edf0f7] px-2 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[#1b1b1b] last:border-0">{link.label}</Link>)}</nav>}
    </header>
  );
}
