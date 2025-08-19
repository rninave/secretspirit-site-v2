"use client";

import { useRef } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { WobbleCard } from "@/components/ui/wobble-card";
import Reveal from "@/components/common/Reveal";

const highlights = [
  { value: 6, label: "Trusted experience over the years" },
  { value: 20, label: "Innovative Thinkers & Doers" },
  { value: 80, label: "Delighted clients worldwide" },
  { value: 10, label: "Countries we proudly serve" },
];

export default function PerformanceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-primary-dark py-16 md:py-20 font-display px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="PERFORMANCE HIGHLIGHTS"
            title=""
            align="center"
            variant="dark"
          />
        </Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-16 mt-10 md:mt-16">
          {highlights.map((item, idx) => (
            <Reveal key={item.label} delayMs={idx * 80}>
            <div
              key={item.label}
              className="group flex flex-col items-center justify-center text-center"
            >
              <div className="w-[180px] h-[180px] sm:w-67 sm:h-67 flex items-center justify-center">
                <WobbleCard className="w-[180px] h-[180px] sm:w-67 sm:h-67 rounded-full performance-card border border-white/20 flex flex-col items-center justify-center cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full px-4">
                    <span className="performance-number text-[40px] md:text-[56px] font-bold tracking-tight mb-3 md:mb-4">
                      {item.value}+
                    </span>
                    <span className="text-white text-xs sm:text-sm font-medium max-w-[90%] mx-auto leading-relaxed">
                      {item.label}
                    </span>
                  </div>
                </WobbleCard>
              </div>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
