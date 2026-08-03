import Image from "next/image";
import { Reveal, SpringLink } from "./MotionPrimitives";

const base = "/bootcamp landing page design/bootcamp landing page design/";

function HeroImage({ src, alt, className, priority = false }: { src: string; alt: string; className: string; priority?: boolean }) {
  return <div className={`absolute overflow-hidden rounded-[20px] ${className}`}><Image src={`${base}${src}`} alt={alt} fill priority={priority} sizes="238px" className="object-cover" /></div>;
}

export default function HeroSection() {
  return (
    <section id="top" className="relative mx-auto h-[700px] w-full max-w-[1440px] overflow-hidden bg-white sm:h-[790px] lg:mb-8 lg:h-[1024px]">
      <div className="absolute inset-x-0 top-3 h-[250px] sm:top-6 sm:h-[330px] lg:hidden">
        <HeroImage src="Rectangle 8.png" alt="Designer sketching" className="left-[-38px] top-[60px] h-[200px] w-[149px] -rotate-[28.59deg] sm:left-[5%] sm:h-[240px] sm:w-[179px]" />
        <HeroImage src="Rectangle 3.png" alt="Students celebrating" priority className="left-1/2 top-0 h-[220px] w-[164px] -translate-x-1/2 sm:h-[270px] sm:w-[201px]" />
        <HeroImage src="Rectangle 2.png" alt="Developer at work" className="right-[-38px] top-[60px] h-[200px] w-[149px] rotate-[28.59deg] sm:right-[5%] sm:h-[240px] sm:w-[179px]" />
      </div>

      <div className="absolute left-[-106px] top-[67px] hidden h-[885px] w-[1652px] lg:block">
        <HeroImage src="Rectangle 3.png" alt="Students celebrating" priority className="left-[707px] top-[67px] h-[320px] w-[238px]" />
        <HeroImage src="Rectangle 2.png" alt="Developer at work" className="left-[970px] top-[117px] h-[320px] w-[238px] rotate-[28.59deg]" />
        <HeroImage src="Rectangle 8.png" alt="Designer sketching" className="left-[320px] top-[112px] h-[320px] w-[238px] -scale-y-100 rotate-[151.41deg]" />
        <HeroImage src="Rectangle 4.png" alt="Code workspace" className="left-[1191px] top-[332px] h-[320px] w-[238px] rotate-[53.47deg]" />
        <HeroImage src="Rectangle 9.png" alt="Collaborative workshop" className="left-[63px] top-[332px] h-[320px] w-[238px] -scale-y-100 rotate-[126.53deg]" />
        <HeroImage src="Rectangle 7.png" alt="Remote class" className="left-[1439px] top-[673px] h-[320px] w-[238px] rotate-90" />
        <HeroImage src="Rectangle 10.png" alt="Pair programming" className="left-[-65px] top-[673px] h-[320px] w-[238px] -scale-y-100 rotate-90" />
      </div>

      <Reveal className="absolute left-1/2 top-[285px] flex w-[calc(100%-40px)] max-w-[634px] -translate-x-1/2 flex-col items-center text-center sm:top-[355px] lg:top-[481px] lg:w-[634px]">
        <h1 className="w-full max-w-[562px] pt-5 font-[family-name:var(--font-montserrat)] text-[38px] font-bold leading-[1.12] tracking-[-.76px] text-[#1b1b1b] sm:text-[50px] sm:leading-[1.16] lg:h-[236px] lg:text-[60px] lg:leading-[1.2] lg:tracking-[-1.2px]">Learn Skills that get you hired in 14 weeks.</h1>
        <p className="w-full pt-5 font-[family-name:var(--font-inter)] text-[16px] font-semibold leading-[1.5] text-[#383838] sm:text-[17px] lg:h-[101px] lg:text-[18px]">Codemantix Collective Academy is a mentor-led bootcamp where you build real-world projects, get hands-on feedback, and graduate with a portfolio that gets you hired, not just certificate</p>
        <div className="flex flex-col items-center justify-center gap-3 pt-8 sm:flex-row">
          <SpringLink href="https://forms.gle/mekayJoQZjgNDJ4x5" target="_blank" rel="noopener noreferrer" className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#4b61a1] bg-[#1e3a8a] px-[25px] font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-white shadow-[0_5px_13.25px_rgba(27,53,126,.68)]">Apply Now <span>→</span></SpringLink>
          <SpringLink href="#courses" className="flex h-[46px] items-center justify-center gap-2 rounded-full border border-[#1e3a8a] bg-white px-[25px] font-[family-name:var(--font-montserrat)] text-[14px] font-bold leading-5 text-[#1e3a8a]">See what you&apos;ll learn <span>→</span></SpringLink>
        </div>
      </Reveal>
      <div className="absolute -bottom-[78px] left-[-136px] hidden h-[206px] w-[1592px] bg-white blur-[28.95px] lg:block" />
    </section>
  );
}
