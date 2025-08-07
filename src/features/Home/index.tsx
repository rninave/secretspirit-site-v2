import Hero from "./hero";
import OurWork from "./our-work";
import SolutionSection from "./solutions";
import TrustedBrands from "./trusted-brands";
import PerformanceHighlights from "./performance-highlights";
import AwardsSection from "./awards";

export default function HomeSections() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <OurWork />
      <SolutionSection />
      <PerformanceHighlights />
      <AwardsSection />
      {/* Placeholder for next section */}
      <section id="next-section" className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-700">Next Section Placeholder</h2>
      </section>
    </>
  );
}