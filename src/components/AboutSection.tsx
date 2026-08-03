"use client";

import Image from "next/image";
import { BounceCard, Reveal, Stagger } from "./MotionPrimitives";

const features = [
  {
    title: "Live, not recorded",
    description:
      "Every session runs with a mentor in the room — questions get answered in real time, not in a comments section.",
  },
  {
    title: "Real project briefs",
    description:
      "Capstones are modeled on actual client work Codemantix delivers — not disconnected practice exercises.",
  },
  {
    title: "Feedback that sharpens work",
    description:
      "Structured reviews at each milestone, so your portfolio piece is something you'd actually hand to a client.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-white lg:mb-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[120px] flex flex-col lg:flex-row gap-10 lg:gap-[40px] items-center">
        {/* Left - Images — slide in from left */}
        <Reveal
          className="relative w-full max-w-[450px] lg:max-w-none lg:w-[553px] h-[420px] md:h-[550px] lg:h-[710px] shrink-0 mx-auto lg:mx-0"
        >
          {/* Top image */}
          <div className="absolute top-[25px] left-0 w-[65%] md:w-[68%] lg:w-[376px] aspect-square lg:h-[366px] rounded-[15px] overflow-hidden border-[5px] border-[#98a4c9]">
            <Image
              src="/bootcamp landing page design/bootcamp landing page design/Rectangle 14.png"
              alt="Virtual classes and tutoring"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          {/* Bottom image */}
          <div className="absolute top-[40%] left-[30%] lg:top-[280px] lg:left-[164px] w-[65%] md:w-[68%] lg:w-[376px] aspect-square lg:h-[366px] rounded-[15px] overflow-hidden border-[5px] border-[#98a4c9]">
            <Image
              src="/bootcamp landing page design/bootcamp landing page design/Rectangle 13.png"
              alt="Remote learning session"
              fill
              className="object-cover rounded-[15px]"
            />
          </div>
          {/* Tag - Virtual classes */}
          <div className="absolute top-[39px] left-[45%] lg:left-[249px] bg-white border border-[#e9ebf3] rounded-[3px] px-3 py-3 shadow-[0_4px_2px_rgba(0,0,0,0.25)] z-10">
            <span className="text-center font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#11204c] min-[426px]:whitespace-nowrap">
              <span className="min-[320px]:max-[425px]:block">virtual classes &amp;</span>{" "}
              <span className="min-[320px]:max-[425px]:block">Tutoring</span>
            </span>
          </div>
          {/* Tag - Remote Learning */}
          <div className="absolute bottom-[10%] left-[8%] lg:top-[589px] lg:left-[48px] bg-white border border-[#e9ebf3] rounded-[3px] px-3 py-3 shadow-[0_4px_2px_rgba(0,0,0,0.25)] z-10">
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#11204c] whitespace-nowrap">
              Remote Learning
            </span>
          </div>
        </Reveal>

        {/* Right - Content — slide in from right with staggered children */}
        <Reveal
          className="flex flex-col flex-1 min-w-0"
        >
          {/* Section Tag */}
          <div className="border-b-[3px] border-[#0d183a] pb-[7px] pt-[4px] self-start mb-2">
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] text-[#1e3a8a] uppercase">
              About the bootcamp
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] lg:leading-[60px] tracking-[-0.96px] text-[#1b1b1b] mt-2">
            Learn by building. Not by watching.
          </h2>
          {/* Subtext */}
          <p className="font-[family-name:var(--font-inter)] font-semibold text-base md:text-lg leading-[1.5] text-[var(--body-text)] mt-4 mb-8 max-w-[672px]">
            Most bootcamps hand you pre-recorded videos and hope you keep up. Codemantix Collective is different , small, live cohorts led by working developers, designers, and analysts, built around real client-style projects instead of toy exercises.
          </p>

          {/* Features */}
          <Stagger className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <BounceCard
                key={index}
                className="flex items-start gap-4 p-[25px] rounded-[22px] border border-[rgba(0,0,0,0.05)] bg-[rgba(233,235,243,0.35)] shadow-[0_4px_4px_rgba(0,0,0,0.05)]"
              >
                <div className="w-10 h-10 rounded-[18px] bg-[#98a4c9] flex items-center justify-center shrink-0">
                  <span className="text-[#11204c] text-lg leading-[28px]">◈</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[#1b1b1b]">
                    {feature.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-base leading-[1.5] text-[var(--body-text)] mt-2">
                    {feature.description}
                  </p>
                </div>
              </BounceCard>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
