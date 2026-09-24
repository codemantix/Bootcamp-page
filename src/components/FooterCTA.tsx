import Image from "next/image";
import Link from "next/link";

export default function FooterCTA() {
  return (
    <section className="w-full">
      {/* CTA Section */}
      <div className="relative w-full h-[567px] overflow-hidden">
        <Image
          src="/bootcamp landing page design/bootcamp landing page design/FOOTER/unsplash_zniM2Qqaxv4.png"
          alt="Career growth"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,6,22,0.65)]" />

        {/* CTA Content - Glassmorphism Card */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="backdrop-blur-[5.35px] bg-[rgba(233,235,243,0.21)] rounded-[20px] overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-[32px] w-full max-w-[896px] flex flex-col items-center">
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[60px] tracking-[-0.96px] text-white text-center pt-3">
              Ready to start your tech journey?
            </h2>
            {/* Subtext + Button */}
            <div className="flex flex-col items-center gap-4 pt-5 max-w-[672px]">
              <p className="font-[family-name:var(--font-inter)] font-semibold text-base md:text-lg leading-[1.5] text-[rgba(255,255,255,0.7)] text-center">
                Applications are reviewed on a rolling basis. Tell us where
                you&apos;re starting from — we&apos;ll help you find the right track.
              </p>
              <a
                href="https://forms.gle/mekayJoQZjgNDJ4x5"
                className="h-[46px] px-[25px] py-[13px] bg-[#1e3a8a] border border-[#4b61a1] text-white font-[family-name:var(--font-montserrat)] font-semibold text-[14px] leading-[20px] rounded-full shadow-[0_5px_13.25px_rgba(27,53,126,0.68)] hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>Start Your Application</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#121829]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[114px] pt-[26px]">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-[100px]">
            {/* Left - Logo & Description */}
            <div className="flex flex-col gap-5 max-w-[451px]">
              {/* Logo */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bootcamp landing page design/bootcamp landing page design/White Logo.png"
                alt="Codemantix Collective"
                className="h-[77px] w-[192px] object-contain"
              />
              {/* Description & Social */}
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[13px] leading-[24px] tracking-[0.2px] text-white">
                  Codemantix Academy is the educational platform of Codemantix
                  Collective, focused on practical technology training and
                  structured learning for developers and innovators.
                </p>
                {/* Social Icons */}
                <div className="flex gap-3 items-center">
                  <Link
                    href="https://www.linkedin.com/company/codemantix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[43px] h-[42px] relative hover:opacity-80 transition-opacity"
                  >
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <rect width="43" height="42" rx="14" fill="white" fillOpacity="0.1"/>
                      <path d="M16 18V28M16 14V14.01M20 28V18M24 28V22C24 20.895 24.895 20 26 20C27.105 20 28 20.895 28 22V28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://web.facebook.com/profile.php?id=61582103190408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[43px] h-[42px] relative hover:opacity-80 transition-opacity"
                  >
                    <svg width="43" height="42" viewBox="0 0 43 42" fill="none">
                      <rect width="43" height="42" rx="14" fill="white" fillOpacity="0.1"/>
                      <path d="M24 14H26V10H24C21.791 10 20 11.791 20 14V16H18V20H20V30H24V20H26L27 16H24V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://x.com/codemantix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[45px] h-[41px] relative hover:opacity-80 transition-opacity"
                  >
                    <svg width="45" height="41" viewBox="0 0 45 41" fill="none">
                      <rect width="45" height="41" rx="14" fill="white" fillOpacity="0.1"/>
                      <path d="M14 11L20.5 20.5M20.5 20.5L14 30H16L22 22L27 30H31L24.5 20.5M20.5 20.5L26 13H28L31 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <Link
                    href="https://www.instagram.com/codemantix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[43px] h-[42px] rounded-[14px] flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ background: "rgba(255,255,255,0.1)" }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2"/>
                      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="2"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right - Links */}
            <div className="flex flex-wrap gap-12 sm:gap-16 lg:gap-20 flex-1 justify-start lg:justify-end">
              {/* Courses / Tracks */}
              <div className="flex flex-col gap-3 min-w-[140px]">
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[14px] leading-[24px] tracking-wide text-white">
                  Tracks
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { label: "Software Engineering", href: "#courses" },
                    { label: "Graphic Design", href: "#courses" },
                    { label: "Data Analytics", href: "#courses" },
                    { label: "UI/UX Design", href: "#courses" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-[family-name:var(--font-inter)] text-[14px] leading-[22px] text-[#cbd5e1] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex flex-col gap-3 min-w-[140px]">
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[14px] leading-[24px] tracking-wide text-white">
                  Bootcamp
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Curriculum", href: "#curriculum" },
                    { label: "How It Works", href: "#how-it-works" },
                    { label: "Pricing", href: "#pricing" },
                    { label: "FAQ", href: "#faq" },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="font-[family-name:var(--font-inter)] text-[14px] leading-[22px] text-[#cbd5e1] hover:text-white transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application CTA */}
              <div className="flex flex-col gap-3 min-w-[140px]">
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[14px] leading-[24px] tracking-wide text-white">
                  Admissions
                </h4>
                <ul className="flex flex-col gap-2.5">
                  <li>
                    <Link
                      href="https://forms.gle/mekayJoQZjgNDJ4x5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] text-[14px] font-semibold text-[#93c5fd] hover:text-white transition-colors"
                    >
                      Apply Now <span>→</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="font-[family-name:var(--font-inter)] text-[14px] leading-[22px] text-[#cbd5e1] hover:text-white transition-colors"
                    >
                      Tuition &amp; Plans
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 py-6 flex items-center justify-center">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#94a3b8]">
              &copy; 2026 Codemantix Collective Academy. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
