import Image from "next/image";
import { Reveal, SpringLink, Stagger, StaggerItem } from "./MotionPrimitives";

type Course = {
  title: string;
  description: string;
  bullets: string[];
  outcome: string;
  image: string;
  badge?: string;
  height: "tall" | "short";
};

const applicationUrl = "https://forms.gle/mekayJoQZjgNDJ4x5";

const courses: Course[] = [
  {
    title: "Software Engineering",
    description: "Go from HTML basics to a fullstack, deployed application.",
    bullets: [
      "Web Development Foundations",
      "Intermediate Web Development (React & Modern Tools)",
      "Build and Deploy a Real Website",
    ],
    outcome: "A live, deployed project in your portfolio.",
    image: "/images/courses/software-engineering.jpg",
    height: "tall",
  },
  {
    title: "Graphic Design",
    description: "Build brand and visual assets that hold up across print and digital",
    bullets: [
      "Apply core graphic design principles",
      "Design a cohesive brand and visual identity system",
      "Produce assets for both print and digital use",
    ],
    outcome: "A complete branding identity and visual asset portfolio ready for clients.",
    image: "/images/courses/graphic-design.jpg",
    height: "short",
  },
  {
    title: "Data Analytics",
    description: "Turn raw data into decisions people actually act on.",
    bullets: [
      "Data Analysis Fundamentals",
      "Introduction to Data Visualization",
      "Using Data for Business Decisions",
    ],
    outcome: "A data project with visualizations and a business recommendation, built on real data..",
    image: "/images/courses/data-analytics.jpg",
    badge: "Beginner",
    height: "tall",
  },
  {
    title: "UI/UX Design Fundamentals",
    description: "Design real interfaces for real use cases, not just mockups.",
    bullets: [
      "UI/UX Design Fundamentals",
      "Designing Real Mobile and Web Applications",
      "Design Systems and Prototyping",
    ],
    outcome: "A complete case study you can show clients or employers.",
    image: "/images/courses/uiux-design.jpg",
    badge: "Beginner",
    height: "short",
  },
];

function CourseCard({ course }: { course: Course }) {
  return (
    <article className={`flex min-h-[640px] flex-col rounded-[20px] bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.05)] lg:min-h-0 ${course.height === "tall" ? "lg:h-[676px]" : "lg:h-[671px]"}`}>
      <div className={`relative h-[220px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[251px] ${course.title === "UI/UX Design Fundamentals" ? "lg:h-[246px]" : ""}`}>
        <Image src={course.image} alt={`${course.title} course`} fill sizes="(min-width: 1024px) 561px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
        {/* {course.badge && <span className="absolute left-[8.5px] top-[5px] flex h-9 items-center rounded-full bg-[rgba(255, 255, 255, 0.1)] px-[25px] font-[family-name:var(--font-inter)] text-xs font-semibold leading-4 text-white">{course.badge}</span>} */}
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-8">
        <div>
          <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold leading-6 text-[#1b1b1b]">{course.title}</h3>
          <div className="mt-[10px] font-[family-name:var(--font-inter)] text-sm leading-[21px] text-[#2a2a2b]">
            <p>{course.description}</p>
            <ul className="ml-[21px] mt-1 list-disc">
              {course.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
          </div>
        </div>

        <div className="mt-auto border-t border-black/5 pt-[25px]">
          <p className="font-[family-name:var(--font-inter)] text-xs font-normal uppercase leading-4 tracking-[0.6px] text-[#4a556c]">Outcome</p>
          <p className="mt-1 max-w-[529px] font-[family-name:var(--font-inter)] text-sm font-medium leading-5 text-[#1b1b1b]">{course.outcome}</p>
        </div>

        <SpringLink href={applicationUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex h-[46px] w-full shrink-0 items-center justify-center gap-2 rounded-full border border-[#4b61a1] bg-[#1e3a8a] px-[25px] font-[family-name:var(--font-montserrat)] text-sm font-semibold leading-5 text-white shadow-[0_5px_13.25px_rgba(27,53,126,0.68)]">Apply Now <span>→</span></SpringLink>
      </div>
    </article>
  );
}

export default function CoursesSection() {
  return (
    <section id="courses" className="w-full bg-[#e9ebf3] py-16 md:py-[79px] lg:mb-8 lg:h-[1745px]">
      <div className="mx-auto w-full max-w-[1000px] px-6 md:px-10 xl:px-0">
        <Reveal className="flex   flex-col items-start">
          <div className="border-b-[3px] border-[#0d183a] pb-[7px] pt-1">
            <span className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase leading-4 tracking-[1.2px] text-[#1b357e]">Courses</span>
          </div>
          <h2 className="mt-2 font-[family-name:var(--font-montserrat)] text-[30px] font-bold leading-[1.25] tracking-[-0.96px] text-[#1b1b1b] md:text-[40px] lg:text-5xl lg:leading-[60px]">Pick a path. Commit fully.</h2>
          <p className="mt-4 font-[family-name:var(--font-inter)] text-base font-semibold leading-6 text-[#383838] md:text-lg md:leading-[27px]">Three focused tracks. Same mentor-led model, tailored curriculum, real outcomes.</p>
        </Reveal>

        <Stagger className="mt-10 grid min-w-0 grid-cols-1 gap-[10px] p-[10px] md:grid-cols-2">
          {courses.map((course) => (
            <StaggerItem key={course.title} className="min-w-0">
              <CourseCard course={course} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
