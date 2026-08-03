import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import CurriculumSection from "@/components/CurriculumSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <div className="flex w-full max-w-full flex-col overflow-x-clip bg-white">
      <Header />
      <main className="w-full min-w-0 max-w-full overflow-x-clip">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <CurriculumSection />
        <HowItWorksSection />
        <PricingSection />
        <FAQSection />
        <FooterCTA />
      </main>
    </div>
  );
}
