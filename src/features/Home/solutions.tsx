'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';

const tabs = [
  {
    label: 'Research',
    value: 'research',
    title: 'Research',
    description:
      'We perform a professional evaluation of the usability of your product. User feedback, product usage analytics, and heuristic evaluation all assist us in determining what needs to be fixed.',
    features: [
      'User Research',
      'Usability Test',
      'UX Audit',
      'Heuristic analysis',
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
      'Wireframing',
      'Prototyping',
      'Interaction Design',
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
      'Frontend Development',
      'Backend Development',
      'API Integration',
      'Testing & QA',
    ],
    image: '/solutions/solution-gif-3.gif',
  },
];

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
    <section className="bg-[#F6F8FE] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          subtitle="Solutions"
          title="Smart Services. Effective Solutions."
          align="center"
          className="mb-10"
        />
        {/* Tab Group */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t.value}
              className={`px-8 py-3 rounded-full font-medium text-sm border transition-all duration-200  hover:shadow-btn focus:outline-none ${
                activeTab === t.value
                  ? 'bg-primary/10 text-primary border-divider shadow-btn translate-y-1'
                  : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10'
              }`}
              onClick={() => handleTabChange(t.value)}
            >
              {t.label}
            </button>
          ))}
        </div>
        {/* Card with animation */}
        <div className="relative min-h-[358px] ">
          <div
            key={activeTab}
            className={`bg-white md:max-h-[358px] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-5xl mx-auto border border-gray-100 transition-all duration-500 ease-in-out
              ${animating ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'}`}
          >
            {/* Left: Text */}
            <div className="flex-1 min-w-[220px] font-display">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-black">{tab.title}</h3>
              <p className="text-body text-sm font-normal mb-6 max-w-xl">{tab.description}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {tab.features.map((feature, i) => (
                  <div key={feature} className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-lg">✱</span>
                    <span className="font-bold text-black text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: GIF */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={tab.image}
                alt={tab.title + ' illustration'}
                width={550}
                height={310}
                unoptimized={true}
                className="object-contain "
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
