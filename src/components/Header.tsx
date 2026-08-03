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
    <header className="relative z-50 mx-auto h-[96px] w-full max-w-[1440px] bg-white px-5 md:h-[118px] md:px-10 xl:h-[138px] xl:px-[120px]">
      <div className="flex h-full items-center justify-between xl:h-[106px] xl:items-end">
        <Link href="#top" aria-label="Codemantix home" className="mb-0 flex xl:h-[66px] xl:w-[192px]">
          <Image src="/bootcamp landing page design/bootcamp landing page design/codemantix logo png 2.png" alt="Codemantix Collective" width={162} height={55} priority className="h-[52px] w-auto object-contain md:h-[60px] xl:h-[66px]" />
        </Link>
        <nav aria-label="Primary navigation" className="mb-[6px] hidden h-[54px] w-[415px] items-center justify-center gap-7 rounded-full border-2 border-[#e5eaf7] bg-white px-5 shadow-[0_2px_5px_rgba(0,0,0,.08)] lg:flex">
          {navLinks.map((link) => <Link key={link.label} href={link.href} className="font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-[#1b1b1b]">{link.label}</Link>)}
        </nav>
        <Link href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="mb-[10px] hidden h-[46px] items-center justify-center gap-2 rounded-full border border-[#4b61a1] bg-[#1e3a8a] px-[25px] font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-white shadow-[0_5px_13.25px_rgba(27,53,126,.68)] sm:flex">Apply Now <span>→</span></Link>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation" className="grid h-11 w-11 place-items-center rounded-full border border-[#dce3f3] text-xl text-[#1e3a8a] lg:hidden">{open ? "×" : "☰"}</button>
      </div>
      {open && <nav className="absolute left-5 right-5 top-[82px] overflow-hidden rounded-[20px] border border-[#e5eaf7] bg-white p-4 shadow-xl md:left-10 md:right-10 md:top-[104px] lg:hidden">{navLinks.map((link) => <Link key={link.label} href={link.href} onClick={() => setOpen(false)} className="block border-b border-[#edf0f7] px-2 py-3 font-[family-name:var(--font-montserrat)] text-sm font-bold text-[#1b1b1b] last:border-0">{link.label}</Link>)}</nav>}
    </header>
  );
}
