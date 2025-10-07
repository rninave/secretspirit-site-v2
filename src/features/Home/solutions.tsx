'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';
import { FiArrowUpRight } from 'react-icons/fi';
import AnimatedButton from '@/components/common/AnimatedButton';

const tabs = [
  {
    label: 'Research',
    value: 'research',
    title: 'Research',
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
  icon1: "solutions/solution-icon-1.svg",
  icon2: "solutions/solution-icon-2.svg",
  icon3: "solutions/solution-icon-3.svg",
  icon4: "solutions/solution-icon-4.svg",
}

export default function SolutionSection() {
  const [activeTab, setActiveTab] = useState('research');
  const [animating, setAnimating] = useState(false);
  const tab = tabs.find((t) => t.value === activeTab) || tabs[0];

  // Animation handler
  const handleTabChange = (value: string) => {
    if (value === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(value);
      setAnimating(false);
    }, 200); // fade out duration
  };

  return (
    <section className="bg-[#F6F8FE] py-12 md:py-15 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="Solutions"
            title="Smart Services. Effective Solutions."
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>
        {/* Tab Group */}
        <Reveal delayMs={50}>
          <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-10 flex-wrap">
            {tabs.map((t) => (
              <button
                key={t.value}
                className={`px-5 md:px-8 py-2.5 md:py-3 cursor-pointer rounded-full font-medium font-body text-xs md:text-sm border transition-all duration-200 hover:shadow-btn focus:outline-none ${activeTab === t.value
                  ? 'bg-primary/10 text-primary border-divider shadow-btn translate-y-0.5'
                  : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10'
                  }`}
                onClick={() => handleTabChange(t.value)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </Reveal>
        {/* Card with animation */}
        <div className="relative ">
          <Reveal delayMs={100}>
            <div
              key={activeTab}
              className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col-reverse md:flex-row items-start gap-6 md:gap-12 mx-auto border border-gray-100 transition-all duration-500 ease-in-out ${animating ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
                }`}
            >
              {/* Left: Text */}
              <div className="flex-1 min-w-[220px]">
                <h3 className="text-lg md:text-2xl font-bold font-heading mb-3 md:mb-4 text-black">{tab.title}</h3>
                <p className="text-body text-sm font-normal leading-6 font-body mb-4 md:mb-6 max-w-xl">{tab.description}</p>
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {tab.features.map((feature, idx) => {
                    // Deterministically assign icon by cycling through icon keys
                    const iconKeys = Object.keys(iconsPath) as (keyof typeof iconsPath)[];
                    const iconKey = iconKeys[idx % iconKeys.length];
                    return (
                      <div key={feature + idx} className="flex items-center gap-2 mb-1.5">
                        <Image src={iconsPath[iconKey]} width={16} height={16} alt="icons" style={{ width: 'auto', height: 'auto' }} />
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
                  icon={<FiArrowUpRight size={16} fontWeight={700} />}
                  className="bg-transparent cursor-pointer font-heading border-2 border-primary text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
                />
                </div>
              </div>

              {/* Right: GIF */}
              <div className="flex-1 flex  items-center justify-center">
                <Image
                  src={tab.image}
                  alt={tab.title + ' illustration'}
                  width={520}
                  height={320}
                  unoptimized
                  className="object-contain max-h-[320px] w-auto"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
