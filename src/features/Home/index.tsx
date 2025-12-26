'use client'

import { useState, useEffect } from 'react';
import TestimonialsSection from "@/components/common/Testimonials";
import SolutionSection from "./solutions";
import AwardsSection from "./awards";
import IndustriesSection from "./industries";
import OurWorkSection from "./our-work";
import PerformanceHighlightsSection from "../../components/common/performance-highlights";
import TrustedBrandsSection from "./trusted-brands";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import HeroSection from "./hero";
import Loading from '@/app/loading';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    // Hide loading screen after animations are ready
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300); // Adjust timing based on your needs

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <ScrollProgress className="top-19" />
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