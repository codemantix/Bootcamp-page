"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./MotionPrimitives";

const faqs = [
  {
    question: "Do I need previous coding experience?",
    answer:
      "No. Codemantix is designed for absolute beginners and career switchers. We start from first principles and ramp fast.",
  },
  {
    question: "Is the program remote?",
    answer:
      "Yes — fully remote and live. Sessions are recorded, but the cohort is synchronous so you learn with your peers in real time.",
  },
  {
    question: "How much time does it take per week?",
    answer:
      "Plan for 25–35 hours per week. It's intensive by design — that's why our graduates get hired.",
  },
  {
    question: "What if I can't afford it upfront?",
    answer:
      "We offer 4-month payment plans and income-share options for eligible applicants. Ask us in the application call.",
  },
  {
    question: "What happens after graduation?",
    answer:
      "Portfolio review, interview prep, referrals to hiring partners, and continued access to the Codemantix alumni community.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const reduced = useReducedMotion();

  return (
    <section id="faq" className="w-full py-[40px] bg-white lg:mb-8 lg:h-[562px]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[16px] flex flex-col lg:flex-row items-start justify-center gap-8">
        {/* Left - Section Heading */}
        <Reveal className="flex-1 max-w-[672px]">
          {/* Tag */}
          <div className="border-b-[3px] border-[#0d183a] pb-[7px] pt-[4px] w-fit">
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] text-[#1e3a8a] uppercase">
              faq
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[60px] tracking-[-0.96px] text-[#1b1b1b] mt-2">
            Everything you need to know.
          </h2>
        </Reveal>

        {/* Right - FAQ Accordion */}
        <div className="shrink-0 w-full lg:w-[736px] flex flex-col items-center">
          <div className="flex flex-col gap-2 w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                layout
                initial={reduced ? false : { opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} whileHover={reduced ? undefined : { x: -3 }} transition={{ layout: { type: "spring", stiffness: 320, damping: 30 }, delay: reduced ? 0 : index * .05 }}
                className="premium-card bg-white border border-[rgba(0,0,0,0.05)] rounded-[22px] shadow-[0_4px_4px_rgba(0,0,0,0.05)] overflow-hidden cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
              >
                <div className="p-[21px]">
                  {/* Question row */}
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[16px] leading-[24px] text-[#091a49]">
                      {faq.question}
                    </p>
                    <button aria-label={`${openIndex === index ? "Close" : "Open"} answer`} className="shrink-0 w-[28px] h-[28px] rounded-full bg-[rgba(233,235,243,0.35)] flex items-center justify-center ml-4">
                      <motion.span animate={{ rotate: openIndex === index ? 45 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 24 }} className="font-semibold text-[16px] leading-[24px] text-[#1e3a8a]">
                        +
                      </motion.span>
                    </button>
                  </div>
                  {/* Answer */}
                  <AnimatePresence initial={false}>{openIndex === index && (
                    <motion.p initial={reduced ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : .3 }} className="overflow-hidden font-[family-name:var(--font-inter)] font-normal text-[14px] leading-[20px] text-[var(--body-text)] pt-3 max-w-[694px]">
                      {faq.answer}
                    </motion.p>
                  )}</AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom link */}
          <p className="text-center mt-8 font-[family-name:var(--font-inter)] font-semibold text-[14px] leading-[20px] text-[#091a49]">
            Still have questions?{" "}
            <a
              href="#apply"
              className="underline hover:opacity-80"
            >
              Apply and we&apos;ll talk →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
