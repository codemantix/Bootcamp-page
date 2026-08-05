"use client";


const features = [
  "Limited early bird slots available",
  "Live mentor-led sessions, twice weekly",
  "Weekly project support session",
  "Certificate on completion",
  "Instalment option available",
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-[87px] bg-white lg:mb-8 lg:h-[1024px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[276px]">
        {/* Section Heading */}
        <div className="flex flex-col items-start max-w-[672px] w-full md:w-[584px]">
          {/* Tag */}
          <div className="border-b-[3px] border-[#0d183a] pb-[7px] pt-[4px]">
            <span className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] text-[#1b357e] uppercase">
              pricing
            </span>
          </div>
          {/* Heading */}
          <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[60px] tracking-[-0.96px] text-[#1b1b1b] mt-2">
            One fee. Any course.
          </h2>
          {/* Subtext */}
          <p className="font-[family-name:var(--font-inter)] font-semibold text-base md:text-lg leading-[1.5] text-[var(--body-text)] mt-4">
            Registration is the same across all four tracks — pick the track
            that fits, not the price.
          </p>
        </div>

        {/* Pricing Cards — staggered scale-up */}
        <div className="flex flex-col md:flex-row gap-8 mt-[101px] items-center">
          {/* Card 1 - Early Bird (filled button) */}
          <div
            className="relative bg-[rgba(233,235,243,0.35)] rounded-[20px] p-[28px] shadow-[0_4px_4px_rgba(0,0,0,0.05)] w-full md:w-[400px] h-auto md:h-[551px] flex flex-col justify-between overflow-hidden"
          >
            {/* Top Section */}
            <div className="border-b-2 border-[#f3f3f3] pb-[40px] pt-[12px] flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#687bb1]">
                  Early Bird
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[var(--body-text)]">
                  Early Registration
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] font-bold text-[50px] leading-[60px] tracking-[-0.96px] text-[#1b1b1b]">
                ₦40,000
              </p>
              <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[20px] text-[#4a556c]">
                Everything you need to go from beginner to job-ready. One price,
                no hidden fees.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-[10px] mt-6 md:mt-0">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-[10px] items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M2 8.5L6 12.5L14 4.5"
                      stroke="#1e3a8a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[20px] text-[#1b1b1b]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Filled */}
            <a href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="w-full h-[46px] mt-6 md:mt-0 bg-[#1e3a8a] border border-[#4b61a1] text-white font-[family-name:var(--font-montserrat)] font-semibold text-[14px] leading-[20px] rounded-full shadow-[0_5px_13.25px_rgba(27,53,126,0.68)] hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2">
              <span>Secure Your Spot</span>
              <span>→</span>
            </a>
          </div>

          {/* Card 2 - Standard (outline button) */}
          <div className="relative bg-[rgba(233,235,243,0.35)] rounded-[20px] p-[28px] shadow-[0_4px_4px_rgba(0,0,0,0.05)] w-full md:w-[400px] h-auto md:h-[551px] flex flex-col justify-between overflow-hidden">
            {/* Standard Pill Tag */}
            <div className="absolute top-[8px] right-[28px] bg-[#11204c] border border-[#e9ebf3] rounded-[43px] px-2 py-1 flex items-center justify-center">
              <span className="font-[family-name:var(--font-inter)] font-medium text-[10px] leading-[20px] text-white">
                STANDARD
              </span>
            </div>

            {/* Top Section */}
            <div className="border-b-2 border-[#f3f3f3] pb-[40px] pt-[12px] flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] uppercase text-[#687bb1]">
                  Early Bird
                </p>
                <p className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[var(--body-text)]">
                  Early Registration
                </p>
              </div>
              <p className="font-[family-name:var(--font-inter)] font-bold text-[50px] leading-[60px] tracking-[-0.96px] text-[#1b1b1b]">
                ₦40,000
              </p>
              <p className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[20px] text-[#4a556c]">
                Everything you need to go from beginner to job-ready. One price,
                no hidden fees.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-[10px] mt-6 md:mt-0">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-[10px] items-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M2 8.5L6 12.5L14 4.5"
                      stroke="#1e3a8a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="font-[family-name:var(--font-inter)] font-medium text-[14px] leading-[20px] text-[#1b1b1b]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button - Outline */}
            <a href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="w-full h-[46px] mt-6 md:mt-0 border border-[#4b61a1] text-[#1e3a8a] font-[family-name:var(--font-montserrat)] font-semibold text-[14px] leading-[20px] rounded-full  hover:bg-[#1e3a8a] hover:text-white transition-colors cursor-pointer flex items-center justify-center gap-2">
              <span>Secure Your Spot</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
