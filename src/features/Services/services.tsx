import AnimatedButton from "@/components/common/AnimatedButton";
import Reveal from "@/components/common/Reveal";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";


const Sections = [
  {
    label: 'Research',
    value: 'research',
    title: 'Research',
    bgColor: 'bg-white',
    href: '/services/research',
    description:
      'We perform a professional evaluation of the usability of your product. User feedback, product usage analytics, and heuristic evaluation all assist us in determining what needs to be fixed.',
    features: [
      'User Interviews & Survey ',
      'Heuristic Analysis',
      'Journey Mapping',
      'Analytics & Heatmaps',
      'Usability Testing',
      'UX Audit',
    ],
    image: '/solutions/solution-gif-1.gif',
  },
  {
    label: 'Design',
    value: 'design',
    title: 'Design',
    bgColor: 'bg-gray-light',
    href: '/services/design',
    description:
      'We create visually compelling and user-friendly interfaces that enhance the user experience and align with your brand identity.',
    features: [
      'UI/UX Design',
      'Wireframing & Prototyping',
      'Interaction Design',
      'Digital Branding',
      'Iconography',
      'Responsive Design',
    ],
    image: '/solutions/solution-gif-2.gif',
  },
  {
    label: 'Develop',
    value: 'develop',
    title: 'Develop',
    bgColor: 'bg-white',
    href: '/services/development',
    description:
      'We build robust, scalable, and high-performance web and mobile applications tailored to your business needs.',
    features: [
      'Web Development',
      'Responsive UI Development',
      'Single-Page Applications(SPAs)',
      'API Development & Integration',
      'Accessibility (WCAG) Compliance',
      'Maintenance and Ongoing Support',
    ],
    image: '/solutions/solution-gif-3.gif',
  },
];

const iconsPath = {
  icon1: "/solutions/solution-icon-1.svg",
  icon2: "/solutions/solution-icon-2.svg",
  icon3: "/solutions/solution-icon-3.svg",
  icon4: "/solutions/solution-icon-4.svg",
}

export default function ServicesSection() {
  return (
    <section className="">
      {Sections.map((section, index) => (
        <Reveal key={index} delayMs={100} className={`${section.bgColor}`}>
          <div
            className={`py-10 md:py-20 px-4 md:px-8 max-w-7xl contain-content flex flex-col-reverse items-start gap-6 md:gap-12 mx-auto transition-all duration-500 ease-in-out ${index == 1 ? 'md:flex-row-reverse': 'md:flex-row'}`}
          >
            {/* Left: Text */}
            <div className="flex-1 min-w-[220px]">
              <h3 className="text-lg md:text-2xl font-bold font-heading mb-3 md:mb-4 text-black">{section.title}</h3>
              <p className="text-body text-sm font-normal leading-6 font-body mb-4 md:mb-6 max-w-xl">{section.description}</p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2">
                {section.features.map((feature, idx) => {
                  // Deterministically assign icon by cycling through icon keys
                  const iconKeys = Object.keys(iconsPath) as (keyof typeof iconsPath)[];
                  const iconKey = iconKeys[idx % iconKeys.length];
                  return (
                    <div key={feature + idx} className="flex items-center gap-2 mb-1.5">
                      <Image src={iconsPath[iconKey]} width={16} height={16} alt="icon" style={{ width: 'auto', height: 'auto' }} />
                      <span className="font-bold text-black text-xs font-body md:text-sm">{feature}</span>
                    </div>
                  );
                })}

              </div>
              <div className='mt-6 w-fit'>
                {/* View More Button */}
                <AnimatedButton
                  text="View More"
                  hoverText="View More"
                  href={section.href}
                  icon={<FiArrowUpRight size={16} fontWeight={700} />}
                  className="bg-transparent cursor-pointer font-heading border-2 border-primary text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
                />
              </div>
            </div>

            {/* Right: GIF */}
            <div className="flex-1 flex  items-center justify-center">
              <Image
                src={section.image}
                alt={section.title + ' illustration'}
                width={520}
                height={320}
                unoptimized
                className="object-contain max-h-[320px] w-auto"
                priority
              />
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  )
}