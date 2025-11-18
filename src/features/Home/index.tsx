import TestimonialsSection from "@/components/common/Testimonials";

import SolutionSection from "./solutions";
import AwardsSection from "./awards";
import IndustriesSection from "./industries";
import OurWorkSection from "./our-work";
import PerformanceHighlightsSection from "../../components/common/performance-highlights";
import TrustedBrandsSection from "./trusted-brands";
import HeroSection from "./hero";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function HomePage() {
  return (
    <>
      <ScrollProgress className="top-[76px]" />
      <HeroSection />
      <section id="next-section" className="p-0 m-0">
        <TrustedBrandsSection />
      </section>
      <OurWorkSection />
      <SolutionSection />
      <PerformanceHighlightsSection />
      <AwardsSection />
      <IndustriesSection />
      <TestimonialsSection />
    </>
  );
}