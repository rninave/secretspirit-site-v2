import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';

const industries = [
  'Education',
  'Healthcare',
  'E-Commerce',
  'Finance',
  'Retail',
  'Real Estate',
  'Logistics',
  'Travel',
  'Media & News',
  'SaaS Products',
  'Manufacturing',
  'Government',
  'Startups',
  'Fitness',
  'Automotive',
  'Agriculture',
];

export default function IndustriesSection() {
  return (
    <section className="bg-primary-dark py-12 md:py-15 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="Domain Expertise"
            title="Industries We Serve"
            align="center"
            className="mb-8 md:mb-10"
            variant="dark"
          />
        </Reveal>
        <Reveal delayMs={80}>
        <div className="font-display flex flex-wrap justify-center gap-3 md:gap-6">
          {industries.map((item) => (
            <span
              key={item}
              className="text-white/90 border border-white/15 rounded-full px-9 py-4 bg-primary-dark hover:bg-white/[0.08] transition-colors text-sm md:text-base font-medium"
            >
              {item}
            </span>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}


