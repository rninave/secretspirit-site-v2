import Hero from "./hero";
import OurWork from "./our-work";
import SolutionSection from "./solutions";
import TrustedBrands from "./trusted-brands";
import PerformanceHighlights from "./performance-highlights";
import AwardsSection from "./awards";
import IndustriesSection from "./industries";

export default function HomeSections() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <OurWork />
      <SolutionSection />
      <PerformanceHighlights />
      <AwardsSection />
      {/* New Industries Section */}
      <section id="next-section" className="p-0 m-0">
        <IndustriesSection />
      </section>
    </>
  );
}