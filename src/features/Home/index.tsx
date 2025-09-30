import Hero from "./hero";
import OurWork from "./our-work";
import SolutionSection from "./solutions";
import TrustedBrands from "./trusted-brands";
import PerformanceHighlights from "./performance-highlights";
import AwardsSection from "./awards";
import IndustriesSection from "./industries";
import Testimonials from "@/components/common/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section id="next-section" className="p-0 m-0">
        <TrustedBrands />
      </section>
      <OurWork />
      <SolutionSection />
      <PerformanceHighlights />
      <AwardsSection />
      <IndustriesSection />
      <Testimonials />
    </>
  );
}