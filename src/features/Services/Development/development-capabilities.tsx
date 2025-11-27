import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';

const capabilities = [
  'UI development',
  'Web development',
  'Responsive UI',
  'SaaS development',
  'Backend',
  'API',
  'Enterprise application',
  'Full-stack',
  'CMS',
  'ReactJS',
  'NextJS',
  'Angular',
  'Nodejs',
  'Best coding practive',
  'Secure coding practice',
  'AI development',
];

export default function DevelopmentCapabilities() {
  return (
    <section className="bg-primary-dark py-12 md:py-15 px-4 sm:px-6 ">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle=""
            title="Our Development Capabilities"
            align="center"
            className="mb-8 md:mb-10"
            variant="dark"
          />
        </Reveal>
        <Reveal delayMs={80}>
        <div className="font-body flex flex-wrap justify-center gap-3 md:gap-6">
          {capabilities.map((item) => (
            <span
              key={item}
              className="text-white/90 max-sm:w-[47%] max-xs:w-full! break-after-column text-center border border-white/15 rounded-full px-9 py-4 bg-primary-dark hover:bg-white/[0.08] transition-colors text-sm md:text-base font-medium"
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


