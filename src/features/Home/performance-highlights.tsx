"use client";

import { useRef } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import { WobbleCard } from "@/components/ui/wobble-card";

const highlights = [
  { value: 6, label: "Trusted experience over the years" },
  { value: 20, label: "Innovative Thinkers & Doers" },
  { value: 80, label: "Delighted clients worldwide" },
  { value: 10, label: "Countries we proudly serve" },
];

export default function PerformanceHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-primary-dark py-20 font-display px-4" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="PERFORMANCE HIGHLIGHTS"
          title=""
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 mt-16">
          {highlights.map((item, idx) => (
            <div
              key={item.label}
              className="group flex flex-col items-center justify-center text-center"
            >
              <div className="w-67 h-67 flex items-center justify-center">
                <WobbleCard className="w-67 h-67 rounded-full performance-card border border-white/20 flex flex-col items-center justify-center cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full px-4">
                    <span className="performance-number text-[48px] md:text-[56px] font-bold tracking-tight mb-4">
                      {item.value}+
                    </span>
                    <span className="text-white text-sm font-medium max-w-[90%] mx-auto leading-relaxed">
                      {item.label}
                    </span>
                  </div>
                </WobbleCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
