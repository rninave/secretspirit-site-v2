import Hero from "./hero";
import TrustedBrands from "./trusted-brands";

export default function HomeSections() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      {/* Placeholder for next section */}
      <section id="next-section" className="min-h-[60vh] flex items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-700">Next Section Placeholder</h2>
      </section>
    </>
  );
}