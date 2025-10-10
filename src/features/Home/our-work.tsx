'use client';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';
import AnimatedButton from '@/components/common/AnimatedButton';

const caseStudies = [
  {
    title: 'Unite Matchmaking',
    image: '/our-work/unite-matchmaking.png',
    description: 'A platform that blends the trusted wisdom of parental support with cutting-edge technology, highlighting unique approach to meaningful matchmaking.',
    tags: ['MATCHMAKING', 'UI DESIGN', 'DEVELOPMENT'],
  },
  {
    title: 'Yliway',
    image: '/our-work/yaliway.png',
    description: 'Yliway connects students, professionals, trainers, and companies to create dynamic professional and business growth opportunities.',
    tags: ['E-LEARNING', 'UI DESIGN', 'DEVELOPMENT'],
  },
  {
    title: 'ZoopUp',
    image: '/our-work/zoopup.png',
    description: 'ZoopUp is the world\'s Learn & Earn marketplace, connecting millions of independent talents, independent teachers with businesses around the globe.',
    tags: ['MARKETPLACE', 'USER RESEARCH', 'UI/UX DESIGN', 'BRANDING'],
  },
  {
    title: 'SarvM .AI',
    image: '/our-work/sarvm-ai-2.png',
    description: 'SarvM unites the entire nano business chain — from farmers and producers to delivery partners and customers — creating a seamless, value-driven ecosystem.',
    tags: ['MARKETING', 'UI/UX DESIGN', 'DEVELOPMENT'],
  },
];

export default function OurWorkSection() {
  return (
    <section className="bg-white py-12 md:py-15 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <Reveal>
          <SectionHeader
            subtitle="Our Work"
            title="Recent Case Studies"
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
          {caseStudies.map((item, idx) => (
            <Reveal key={idx} delayMs={idx * 80}>
              <div className="bg-swhite  overflow-hidden  flex flex-col group transition-transform duration-300 hover:-translate-y-1">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-2xl"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                </div>
                <div className="pt-4 gap-4 flex-1 flex flex-col justify-between">
                  {/* Title and Arrow Row */}
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg md:text-2xl font-bold text-heading font-heading transition-colors mb-0">{item.title}</h3>
                    <button className="w-10 h-10 cursor-pointer hover:rotate-45 flex items-center justify-center rounded-full bg-white border border-divider text-body hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm ml-2 mt-[-6px]">
                      <FiArrowUpRight size={22} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`bg-white border border-divider ${i === 0 ? 'text-primary' : 'text-body'} text-[8px] md:text-xs font-heading font-bold px-3 py-2 rounded-full shadow-md`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-body font-body leading-6 font-normal text-xs md:text-sm mb-4 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center">
          <AnimatedButton
            text="View More"
            hoverText="View More"
            icon={<FiArrowUpRight size={16} fontWeight={700} />}
            className="bg-transparent cursor-pointer font-heading border-2 border-primary text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
          />
        </div>
      </div>
    </section>
  );
}
