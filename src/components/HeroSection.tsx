"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Reveal, SpringLink } from "./MotionPrimitives";

const base = "/bootcamp landing page design/bootcamp landing page design/";

const carouselImages = [
  { src: "Rectangle 2.png", alt: "Programmer working at multiple monitors" },
  { src: "Rectangle 3.png", alt: "Students celebrating with a high five" },
  { src: "Rectangle 4.png", alt: "Remote video class" },
  { src: "Rectangle 7.png", alt: "Person reclining beside a laptop" },
  { src: "Rectangle 8.png", alt: "Designer drawing with a stylus" },
  { src: "Rectangle 9.png", alt: "People collaborating around a table" },
  { src: "Rectangle 10.png", alt: "Person using a mobile device" },
];

const keyMetrics = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 8H6C4.9 8 4 8.9 4 10V20H20V10C20 8.9 19.1 8 18 8ZM18 18H6V12H18V18ZM10 13H8V15H10V13ZM14 13H12V15H14V13ZM7 3H9V5H7V3ZM15 3H17V5H15V3ZM12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6Z" fill="white"/>
      </svg>
    ),
    label: "VIRTUAL CLASSES AND TUTORING",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM8.46 14.45L7.1 13.83C6.55 13.59 6.55 12.81 7.1 12.56L7.83 12.23C8.16 12.08 8.39 11.77 8.43 11.42C8.51 10.73 8.2 10.04 7.6 9.63L7.1 9.29C6.63 8.97 6.72 8.25 7.25 8.06L8.63 7.57C9.12 7.4 9.65 7.64 9.84 8.12C10.08 8.74 10.73 9.12 11.39 8.99L11.89 8.89C12.31 8.81 12.59 8.42 12.52 8C12.44 7.51 12.76 7.05 13.25 6.95L14.06 6.79C14.56 6.69 15.05 7 15.16 7.5C15.27 8.01 15.76 8.33 16.27 8.24L16.63 8.17C17.1 8.08 17.5 8.42 17.5 8.9V9.08C17.5 9.44 17.28 9.76 16.95 9.89L16.05 10.25C15.43 10.5 15.15 11.23 15.47 11.82L15.8 12.44C16.02 12.85 15.89 13.36 15.5 13.6L14.5 14.23C14.19 14.42 13.8 14.38 13.53 14.13C13.1 13.74 12.44 13.76 12.03 14.17L11.73 14.47C11.33 14.87 10.67 14.85 10.29 14.43L10.11 14.23C9.84 13.93 9.41 13.82 9.03 13.97L8.46 14.45ZM15 18L14.18 16.36C13.98 15.97 13.59 15.72 13.15 15.72H11.85C11.41 15.72 11.02 15.97 10.82 16.36L10 18" fill="white"/>
      </svg>
    ),
    label: "COLLABORATIVE LEARNING ENVIROMENT",
  },
  {
    icon: (
      <svg width="30" height="48" viewBox="0 0 448 512" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M319.4 320.6L224 416L128.6 320.6C57.1 323.7 0 381.1 0 451.8V464C0 490.5 21.5 512 48 512H400C426.5 512 448 490.5 448 464V451.8C448 381.1 390.9 323.7 319.4 320.6ZM224 288C288.5 288 344 257.4 344 176V160C344 71.6 295 0 224 0C153 0 104 71.6 104 160V176C104 257.4 159.5 288 224 288ZM178 146.4L224 73.6L270 146.4H322L286 208H162L126 146.4H178Z" fill="white"/>
      </svg>
    ),
    label: "CERTIFICATE UPON COMPLETION",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="top" className="relative mx-auto w-full max-w-[1920px] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          >
            <Image
              src={`${base}${img.src}`}
              alt={img.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(0,3,10,0.88)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-[2] flex min-h-[600px] flex-col items-center justify-center px-5 pb-[40px] pt-[120px] sm:min-h-[800px] sm:pb-[200px] lg:min-h-[1024px] lg:pb-[240px] lg:pt-[140px]">
        <Reveal className="flex w-full max-w-[773px] flex-col items-center text-center">
          <h1 className="w-full pt-5 font-[family-name:var(--font-montserrat)] text-[34px] font-bold leading-[1.2] tracking-[-1.2px] text-white sm:text-[52px] lg:text-[72px]">
            Learn Skills that get you hired in 14 weeks.
          </h1>
          <p className="mt-5 w-full max-w-[641px] font-[family-name:var(--font-inter)] text-[14px] font-semibold leading-[1.5] text-white sm:text-[16px]">
            Codemantix Collective Academy is a mentor-led bootcamp where you build real-world projects, get hands-on feedback, and graduate with a portfolio that gets you hired, not just certificate
          </p>
          <div className="flex flex-col items-center justify-center gap-3 pt-8 sm:flex-row">
            <SpringLink
              href="https://forms.gle/mekayJoQZjgNDJ4x5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#4b61a1] bg-[#1e3a8a] px-[25px] font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-white shadow-[0_5px_13.25px_rgba(27,53,126,.68)]"
            >
              Apply Now <span>→</span>
            </SpringLink>
            <SpringLink
              href="#courses"
              className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-white bg-transparent px-[25px] font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-white"
            >
              See what you&apos;ll learn <span>→</span>
            </SpringLink>
          </div>
        </Reveal>
      </div>

      {/* Key Metrics Cards */}
      <div className="relative z-[3] mx-auto w-[calc(100%-30px)] max-w-[1000px] pb-6 sm:absolute sm:bottom-8 sm:left-1/2 sm:pb-0 sm:-translate-x-1/2 lg:bottom-10">
        <div className="flex flex-col gap-4 backdrop-blur-[5.2px] sm:flex-row sm:gap-[41px]">
          {keyMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-1 flex-row items-center">
              <div className="flex h-full w-full flex-col items-center justify-center gap-[10px] rounded-[12px] border border-white/10 bg-white/10 p-5">
                <div className="flex h-[48px] w-[48px] items-center justify-center">
                  {metric.icon}
                </div>
                <p className="text-center font-[family-name:var(--font-montserrat)] text-[12px] font-semi-bold leading-[1.2] tracking-[-1.2px] text-white sm:text-[16px] lg:text-[20px]">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </section>
  );
}
