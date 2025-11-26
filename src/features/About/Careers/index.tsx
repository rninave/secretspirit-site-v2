import PageHero from "@/components/common/PageHero";
import WhyJoinSS from "./why-join";
import Opportunities from "./opportunities";
import TestimonialsSection from "@/components/common/Testimonials";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function CareersPage() {
  return (
    <>
    <ScrollProgress className="top-[76px]" />
      <PageHero
        title="Work culture at Secretspirit"
        bgImage="/heros/careers-hero.jpg"
        overlayColor="bg-[linear-gradient(123.99deg,#000000_5.78%,#331C07_45.6%,#000000_81.67%)] opacity-90"
        breadcrumbItems={[{ label: 'HOME', href: '/' },{label: 'ABOUT US', href: '/about'}, { label: 'CAREER' }]}
        subtitle="Our work culture is defined by values, collaboration, and empowerment.  We create an environment where employees feel supported and inspired. This positive culture boosts satisfaction, engagement, and performance."
      />
      <WhyJoinSS />
      <Opportunities />
      <TestimonialsSection />

    </>
  );
}
