import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Fill a 5-minute application — no CV required.",
  },
  {
    number: "02",
    title: "Get accepted",
    description: "Short intro call to check fit and answer questions.",
  },
  {
    number: "03",
    title: "Start learning",
    description: "Kick off with live onboarding and your first project brief.",
  },
  {
    number: "04",
    title: "Build projects",
    description: "Ship real work each module with mentor feedback.",
  },
  {
    number: "05",
    title: "Graduate & get hired",
    description: "Portfolio review, interview prep, and referrals.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
        {/* Left - Image */}
        <div className="relative w-full lg:w-[700px] h-[400px] md:h-[500px] lg:h-[890px] shrink-0 lg:-ml-[80px] mt-10 lg:mt-20">
          <Image
            src="/bootcamp landing page design/bootcamp landing page design/image 16.png"
            alt="Students collaborating"
            fill
            className="object-cover"
          />
        </div>

        {/* Right - Process Steps */}
        <div className="flex-1 px-6 md:px-10 lg:pl-10 lg:pr-[40px] py-10 lg:py-0 flex flex-col justify-center">
          {/* Section Header */}
          <div className="mb-6 lg:mb-0 px-0 lg:px-[40px]">
            {/* Tag */}
            <div className="border-b-[3px] border-[#0d183a] pb-[7px] pt-[4px] w-fit">
              <span className="font-[family-name:var(--font-montserrat)] font-bold text-[12px] leading-[16px] tracking-[1.2px] text-[#1e3a8a] uppercase">
                how it works
              </span>
            </div>
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-montserrat)] font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.25] lg:leading-[60px] tracking-[-0.96px] text-[#1b1b1b] mt-2">
              From application to launch.
            </h2>
          </div>

          {/* Steps with numbered circles */}
          <div className="flex gap-[20px] items-center px-0 lg:px-[40px] mt-8 lg:mt-0 h-auto lg:h-[701px]">
            {/* Number column with connecting lines */}
            <div className="flex flex-col items-center shrink-0 h-[557px] justify-center w-[52px]">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  {/* Numbered circle */}
                  <div className="w-[48.4px] h-[48.4px] rounded-[31.9px] border-[4.4px] border-[#1e3a8a] bg-white flex items-center justify-center p-[11px]">
                    <span className="font-[family-name:var(--font-inter)] font-semibold text-[19.8px] leading-[1.5] text-[#1e3a8a]">
                      {step.number}
                    </span>
                  </div>
                  {/* Dashed connector line */}
                  {index < steps.length - 1 && (
                    <div className="w-0 h-[65px] border-l-[3.3px] border-dashed border-[#1e3a8a] opacity-30" />
                  )}
                </div>
              ))}
            </div>

            {/* Content column - step cards */}
            <div className="flex flex-col gap-4 flex-1 w-[464px] max-w-full">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-white border border-[rgba(0,0,0,0.05)] rounded-[22px] p-[21px] shadow-[0_4px_2px_rgba(0,0,0,0.05)]"
                >
                  <h3 className="font-[family-name:var(--font-montserrat)] font-bold text-[20px] leading-[1.2] text-[#091a49] pt-4">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-base leading-[1.5] text-[#4a556c] pt-2">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
