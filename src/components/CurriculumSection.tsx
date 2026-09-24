"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const tracks = [
  "Software Engineering",
  "UI/UX Design",
  "Data Analytics",
  "Graphic Design",
];

interface TrackContent {
  title: string;
  level: string;
  duration: string;
  format: string;
  description: string;
  objectives: string[];
  modules: { number: string; title: string }[];
  outcome: string;
}

const trackData: Record<string, TrackContent> = {
  "Software Engineering": {
    title: "Software Engineering",
    level: "beginner - intermediate",
    duration: "14 weeks",
    format: "live classes",
    description:
      'Frontend-focused, with backend fundamentals — go from HTML basics to a deployed application. Not a "fullstack in 14 weeks" promise: the depth is in the frontend, with just enough backend to understand how the two connect.',
    objectives: [
      "Build responsive, accessible interfaces with HTML, CSS, and JavaScript",
      "Work with React and modern front-end tooling",
      "Ship and deploy a real, live website",
      "Understand how frontend integrates with a backend",
    ],
    modules: [
      { number: "01", title: "Introduction to Software Engineering" },
      { number: "02", title: "Programming Fundamentals" },
      { number: "03", title: "Version Control & Collaboration" },
    ],
    outcome: "A live, deployed frontend project in your portfolio.",
  },
  "UI/UX Design": {
    title: "UI/UX & Product Design",
    level: "beginner - intermediate",
    duration: "14 weeks",
    format: "live classes",
    description:
      "Design real interfaces for real use cases, not just mockups — moving from fundamentals to a complete, presentable design system.",
    objectives: [
      "Apply core UI/UX design fundamentals and principles",
      "Design real mobile and web applications end to end",
      "Build a reusable design system and prototype it",
    ],
    modules: [
      { number: "01", title: "Introduction to Product Design" },
      { number: "02", title: "User Research" },
      { number: "03", title: "Information Architecture" },
    ],
    outcome:
      "A complete design system and case study you can show clients or employers.",
  },
  "Data Analytics": {
    title: "Data Analytics",
    level: "beginner - intermediate",
    duration: "14 weeks",
    format: "live classes",
    description:
      "Turn raw data into decisions people actually act on — from cleaning and analyzing datasets to visualizing and presenting findings.",
    objectives: [
      "Analyze raw datasets using core data-analysis techniques",
      "Build clear, accurate data visualizations",
      "Turn analysis into a business recommendation",
    ],
    modules: [
      { number: "01", title: "Introduction to Data Analysis" },
      { number: "02", title: "Data Handling with Excel" },
      { number: "03", title: "SQL for Data Analysis" },
    ],
    outcome:
      "A data project with visualizations and a business recommendation, built on real data..",
  },
  "Graphic Design": {
    title: "Graphic Design",
    level: "beginner - intermediate",
    duration: "14 weeks",
    format: "live classes",
    description:
      "Design real interfaces for real use cases, not just mockups — moving from fundamentals to a complete, presentable design system.",
    objectives: [
      "Apply core graphic design and visual composition principles",
      "Apply core graphic design and visual composition principles",
      "Produce assets for both print and digital use",
    ],
    modules: [
      { number: "01", title: "Introduction to Graphic  Design" },
      { number: "02", title: "Color Theory & Typography" },
      { number: "03", title: "Design Tools & Software" },
    ],
    outcome: "A brand identity project ready for a design portfolio.",
  },
};

const bonusItems = [
  [
    "AI tools for your chosen field",
    "Simple AI automation",
    "Portfolio development",
    "Career & freelance preparation",
  ],
  [
    "Codemantix alumni community access",
    "Opportunity to join selected Codemantix projects",
  ],
];

export default function CurriculumSection() {
  const [activeTrack, setActiveTrack] = useState("Software Engineering");
  const data = trackData[activeTrack];
  const reduced = useReducedMotion();

  return (
    <section id="curriculum" className="relative w-full overflow-hidden bg-[#091a49] py-16 md:py-[80px] px-6 md:px-10 lg:mb-8 lg:px-[144px]">
      <div aria-hidden className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#fd7933]/10 blur-[100px]" />
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <Reveal className="flex flex-col items-start max-w-[672px]">
          {/* Tag */}
          <div className="border-b-[5px] border-[#fd7933] pb-[9px] pt-[4px]">
            <span className="font-semibold text-[12px] leading-[16px] tracking-[1.2px] text-[#fd7933] uppercase">
              curriculum
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[60px] tracking-[-0.96px] text-white mt-2">
            Four courses, one standard
          </h2>
          {/* Subtext */}
          <p className="font-[family-name:var(--font-inter)] font-semibold text-base md:text-lg leading-[1.5] text-white/70 mt-4">
            Every module ends with a real project you keep in your portfolio. No
            filler, no busywork — just the skills employers pay for.
          </p>
        </Reveal>

        {/* Track Tabs */}
        <div className="flex flex-wrap gap-2 mt-12">
          {tracks.map((track) => (
            <motion.button layout
              key={track}
              onClick={() => setActiveTrack(track)}
              whileHover={reduced ? undefined : { y: -2 }} whileTap={reduced ? undefined : { scale: .97 }} transition={{ type: "spring", stiffness: 400, damping: 24 }}
              className={`h-[46px] px-[25px] py-[13px] rounded-full font-[family-name:var(--font-montserrat)] font-semibold text-[14px] leading-[20px] transition-all cursor-pointer ${
                activeTrack === track
                  ? "bg-white border border-[#1e3a8a] text-[#1e3a8a]"
                  : "text-[#b9c2db] hover:text-white"
              }`}
            >
              {track}
            </motion.button>
          ))}
        </div>

        {/* Track Content Card */}
        <AnimatePresence mode="wait" initial={false}><motion.div key={activeTrack} initial={reduced ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: reduced ? 0 : .35 }} className="mt-[19px] min-w-0 bg-white/5 border border-white/[0.27] rounded-[20px] px-5 sm:px-6 md:px-[33px] py-[25px] flex flex-col gap-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-[rgba(233,235,243,0.35)] text-[#0d183a] font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase p-2 rounded-[4px]">
              {data.level}
            </span>
            <span className="bg-white/5 text-[#b9c2db] font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase p-2 rounded-[4px]">
              {data.duration}
            </span>
            <span className="bg-white/5 text-[#b9c2db] font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase p-2 rounded-[4px]">
              {data.format}
            </span>
          </div>

          {/* Title & Description */}
          <div className="pt-3 flex flex-col gap-4">
            <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] md:text-[28px] leading-[38px] text-white">
              {data.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-base leading-[1.5] text-white max-w-[764px] pt-3">
              {data.description}
            </p>
          </div>

          {/* Objectives & Modules */}
          <div className="flex flex-col lg:flex-row gap-5 pt-4">
            {/* Learning Objectives */}
            <div className="flex-1 pt-3 flex flex-col gap-5">
              <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[#ff9d69]">
                Learning Objectives
              </h4>
              <div className="flex flex-col gap-[10px]">
                {data.objectives.map((obj, i) => (
                  <ul key={i} className="font-[family-name:var(--font-inter)] text-base text-white">
                    <li className="list-disc ml-6 leading-[1.5]">{obj}</li>
                  </ul>
                ))}
              </div>
            </div>

            {/* Modules */}
            <div className="flex-1 pt-3 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-5">
                <h4 className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[#ff9d69]">
                  Modules
                </h4>
                <div className="flex flex-col gap-[10px]">
                  {data.modules.map((module) => (
                    <div
                      key={module.number}
                      className="flex gap-[10px] items-center"
                    >
                      <span className="font-[family-name:var(--font-inter)] font-semibold text-[18px] text-[rgba(255,157,105,0.57)]">
                        {module.number}
                      </span>
                      <span className="font-[family-name:var(--font-inter)] text-base text-white leading-[1.5]">
                        {module.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="border border-[#fd7933] text-[#fd7933] font-[family-name:var(--font-montserrat)] font-semibold text-[11px] sm:text-[13px] leading-[20px] h-[46px] px-[12px] sm:px-[25px] py-[13px] rounded-full shadow-[0_5px_26.5px_rgba(27,53,126,0.68)] hover:bg-[#fd7933] hover:text-white transition-colors cursor-pointer w-fit flex items-center gap-2 whitespace-nowrap">
                <span>Apply Now To View Complete Modules</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-12 gap-6">
            <div className="bg-white/5 border border-white/[0.27] rounded-[20px] px-[21px] py-[13px] flex flex-col gap-4 w-full md:w-[449px]">
              <h4 className="font-[family-name:var(--font-montserrat)] font-semibold text-[18px] leading-[1.5] text-white">
                Outcome
              </h4>
              <p className="font-[family-name:var(--font-inter)] font-normal text-base leading-[1.5] text-white">
                {data.outcome}
              </p>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-base leading-[1.5] text-white max-w-[359px]">
              Assignments, project reviews, progress tracking, and a certificate
              on completion — same as every track.
            </p>
          </div>
        </motion.div></AnimatePresence>

        {/* Included with every track */}
        <div className="flex flex-col items-center gap-[21px] pt-10 mt-10">
          <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[24px] md:text-[28px] leading-[38px] text-white text-center">
            Included with every track
          </h3>
          {/* Row 1 */}
          <Stagger className="flex flex-wrap justify-center gap-3">
            {bonusItems[0].map((item, i) => (
              <StaggerItem
                key={i}
                className="bg-white/5 border border-white/[0.27] rounded-[20px] px-[14px] sm:px-[21px] py-[13px]"
              >
                <p className="font-[family-name:var(--font-inter)] text-[14px] sm:text-base leading-[1.5] text-[#fd7933] whitespace-nowrap">
                  {item}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
          {/* Row 2 */}
          <Stagger className="flex flex-wrap justify-center gap-3">
            {bonusItems[1].map((item, i) => (
              <StaggerItem
                key={i}
                className="bg-white/5 border border-white/[0.27] rounded-[20px] px-[14px] sm:px-[21px] py-[13px]"
              >
                <p className="font-[family-name:var(--font-inter)] text-[14px] sm:text-base leading-[1.5] text-[#fd7933] whitespace-nowrap">
                  {item}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
