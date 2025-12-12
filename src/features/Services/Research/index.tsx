import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import CoreReasonsSection from "./core-reasons";
import OurApproachSection from "./our-approach";
import OurStrategySection from "./our-strategy";

export default function ResearchPage() {
  return (
    <>
      <ScrollProgress className="top-[76px]" />
      <PageHero
        title="Research at the core of every solution"
        bgImage="/heros/research-hero.jpg"
        overlayColor="opacity-[0.90]"
        bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
        breadcrumbItems={[
          { label: "HOME", href: "/" },
          { label: "SERVICES", href: "/services" },
          { label: "RESEARCH" },
        ]}
        subtitle="We combine product research, UX research, and AI-driven insights while following the complete UX process to deeply understand user behavior and needs. This approach ensures solutions that align with business goals and user expectations. From concept to launch, we transform ideas into functional, market-ready experiences."
      />
      <CoreReasonsSection />
      <OurApproachSection />
      <OurStrategySection />
      <TestimonialsSection classname="!bg-gray-light" />
    </>
  );
}
