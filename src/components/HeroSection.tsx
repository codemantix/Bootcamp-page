"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Reveal } from "./MotionPrimitives";

// 8 newly generated high-quality bootcamp photos
const archCards = [
  { src: "/images/orbit/photo-1.jpg", alt: "Students celebrating high five" },
  { src: "/images/orbit/photo-2.jpg", alt: "Developer coding with multiple monitors" },
  { src: "/images/orbit/photo-3.jpg", alt: "UI/UX designer sketching wireframes on tablet" },
  { src: "/images/orbit/photo-4.jpg", alt: "Students collaborating around table with laptops" },
  { src: "/images/orbit/photo-5.jpg", alt: "Student attending remote interactive class" },
  { src: "/images/orbit/photo-6.jpg", alt: "Software engineer sketching architecture on glass board" },
  { src: "/images/orbit/photo-7.jpg", alt: "Senior tech mentor guiding student in code review" },
  { src: "/images/orbit/photo-8.jpg", alt: "Focused developer coding on laptop at desk" },
];

// Exact parametric ellipse parameters fitting the Figma 1440px arch
const RX = 627;
const RY = 765;
const Y_CENTER = 452;
const MAX_DEG = 85;

export default function HeroSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  useEffect(() => {
    let animId: number;
    // 36 seconds for one complete, serene, continuous loop
    const LOOP_DURATION = 36000;
    // 72% of the loop is on the visible arc; 28% is the hidden reset trip
    const VISIBLE_RATIO = 0.72;

    const tick = (now: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = now;
      }
      const rawDelta = now - lastTimeRef.current;
      lastTimeRef.current = now;
      // Cap delta to prevent hitching if tab becomes inactive
      const delta = Math.min(rawDelta, 50);

      // Continuously advance progress without stopping on hover
      progressRef.current = (progressRef.current + delta / LOOP_DURATION) % 1.0;

      const totalCards = archCards.length;

      for (let i = 0; i < totalCards; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;

        // Progress of card i along the loop [0, 1)
        const u = (progressRef.current + i / totalCards) % 1.0;

        if (u <= VISIBLE_RATIO) {
          // Linear continuous progress across the visible arc
          const lambda = u / VISIBLE_RATIO;
          const deg = -MAX_DEG + lambda * (2 * MAX_DEG);
          const phi = (deg * Math.PI) / 180;

          // Pure parametric ellipse coordinates
          const x = RX * Math.sin(phi);
          const y = Y_CENTER - RY * Math.cos(phi);
          const rot = deg * 0.95;

          // Smooth linear fade-in at bottom-left entrance, fade-out at bottom-right exit
          let opacity = 1;
          if (lambda < 0.12) {
            opacity = lambda / 0.12;
          } else if (lambda > 0.88) {
            opacity = (1 - lambda) / 0.12;
          }

          // Gentle scale peaking at apex
          const scale = 0.94 + 0.08 * Math.sin(lambda * Math.PI);

          el.style.opacity = opacity.toFixed(3);
          el.style.visibility = opacity < 0.01 ? "hidden" : "visible";
          el.style.pointerEvents = opacity < 0.2 ? "none" : "auto";
          el.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0) rotate(${rot.toFixed(1)}deg) scale(${scale.toFixed(3)})`;
        } else {
          // Invisible smooth return trip underneath
          const r = (u - VISIBLE_RATIO) / (1 - VISIBLE_RATIO);
          const deg = MAX_DEG - r * (2 * MAX_DEG);
          const phi = (deg * Math.PI) / 180;
          const x = RX * Math.sin(phi);
          const y = Y_CENTER - RY * Math.cos(phi);

          el.style.opacity = "0";
          el.style.visibility = "hidden";
          el.style.pointerEvents = "none";
          el.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), calc(-50% + ${y.toFixed(1)}px), 0)`;
        }
      }

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section
      id="top"
      className="relative flex  w-full flex-col items-center overflow-hidden bg-white pb-20"
    >
      {/* 1440px Figma Photo Arch Canvas */}
      <div className="pointer-events-none absolute left-1/2 -top-16  w-[1440px] -translate-x-1/2 origin-top md:block sm:block lg:block xl:block">
        <div className="relative h-full w-full">
          {archCards.map((card, i) => (
            <div
              key={card.src}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="absolute left-1/2 top-[520px] will-change-transform"
              style={{
                width: "230px",
                height: "305px",
                opacity: 0,
                visibility: "hidden",
              }}
            >
              <div className="group/card relative h-full w-full overflow-hidden rounded-[26px] border border-slate-100/90 bg-white shadow-[0_16px_36px_rgba(0,0,0,0.12)] transition-all duration-300 hover:scale-105 hover:shadow-[0_24px_48px_rgba(0,0,0,0.2)]">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="200px"
                  priority={i < 4}
                  className="object-contain transition-transform duration-500 group-hover/card:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Hero Content */}
      <div className="relative z-20 flex w-full max-w-[760px] flex-col items-center px-4 pt-[340px] text-center sm:pt-[400px] lg:pt-[360px]">
        <Reveal className="flex flex-col items-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-[24px] font-extrabold leading-[1.12] tracking-tight text-[#111827] sm:text-[48px] md:text-[48px]">
            Learn Skills that
            <br />
            get you hired in 14
            <br />
            weeks.
          </h1>

          <p className="mt-6 max-w-[620px] font-[family-name:var(--font-inter)] text-[14px] font-normal leading-relaxed text-[#374151] sm:text-[16px] lg:text-[17px]">
            Codemantix Collective Academy is a mentor-led bootcamp where you build
            real-world projects, get hands-on feedback, and graduate with a
            portfolio that gets you hired, not just certificate
          </p>

          <div className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link
              href="https://forms.gle/mekayJoQZjgNDJ4x5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] sm:h-[48px] items-center justify-center gap-2 rounded-full bg-[#1b357e] px-7 sm:px-8 font-[family-name:var(--font-montserrat)] text-[14px] sm:text-[15px] font-bold text-white shadow-[0_12px_24px_rgba(27,53,126,0.4)] transition-all hover:bg-[#152a65] hover:shadow-[0_14px_28px_rgba(27,53,126,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              Apply Now <span className="text-base font-normal">→</span>
            </Link>

            <Link
              href="#curriculum"
              className="inline-flex h-[46px] sm:h-[48px] items-center justify-center gap-2 rounded-full border border-[#1b357e] bg-white px-7 sm:px-8 font-[family-name:var(--font-montserrat)] text-[14px] sm:text-[15px] font-bold text-[#1b357e] transition-all hover:bg-slate-50 hover:-translate-y-0.5 active:translate-y-0"
            >
              See what you&apos;ll learn <span className="text-base font-normal">→</span>
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Bottom Soft Fade Gradient Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
    </section>
  );
}
