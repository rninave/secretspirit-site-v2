import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import ToolUseCard from "@/components/common/ToolUseCard";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import WeProduceSection from "./we-produce";
import DesignCapabilities from "./design-capabilities";
import TheProcess from "./the-process";
import Reveal from "@/components/common/Reveal";

const toolList = [
  { id: 1, src: "/toolcard/design-icon-1.svg", alt: "tool icon 1" },
  { id: 2, src: "/toolcard/design-icon-2.svg", alt: "tool icon 2" },
  { id: 3, src: "/toolcard/design-icon-3.svg", alt: "tool icon 3" },
  { id: 4, src: "/toolcard/design-icon-4.svg", alt: "tool icon 4" },
  { id: 5, src: "/toolcard/design-icon-5.svg", alt: "tool icon 5" },
  { id: 6, src: "/toolcard/design-icon-6.svg", alt: "tool icon 6" },
  { id: 7, src: "/toolcard/design-icon-7.svg", alt: "tool icon 7" },
  { id: 8, src: "/toolcard/design-icon-8.svg", alt: "tool icon 8" },
  { id: 9, src: "/toolcard/design-icon-9.svg", alt: "tool icon 9" },
  { id: 10, src: "/toolcard/design-icon-10.svg", alt: "tool icon 10" },
  { id: 11, src: "/toolcard/design-icon-11.svg", alt: "tool icon 11" },
];
export default function DesignPage() {
  return (
    <>
      <ScrollProgress className="top-[76px]" />
      <PageHero
        title="Design is intelligence made visible"
        bgImage="/heros/design-hero.png"
        overlayColor="opacity-[0.90]"
        bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
        breadcrumbItems={[
          { label: "HOME", href: "/" },
          { label: "SERVICES", href: "/services" },
          { label: "DESIGN" },
        ]}
        subtitle="Our expert team designs intuitive and engaging experiences that prioritize usability. By deeply understanding users through interviews and real-world observations, we connect with customer needs to deliver tailored, exceptional solutions."
      />
      <Reveal delayMs={100}>
        <ToolUseCard tools={toolList} />
      </Reveal>
      <WeProduceSection />
      <TheProcess />
      <DesignCapabilities />
      <TestimonialsSection />
    </>
  );
}
