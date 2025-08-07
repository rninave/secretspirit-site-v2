'use client';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const caseStudies = [
  {
    title: 'Valet Parking',
    image: '/our-work/valet-parking.png',
    description: 'Valet parking application provide a convenient and efficient way for users to park their vehicles in busy...',
    tags: ['UI DESIGN', 'UI DESIGN'],
  },
  {
    title: 'Bloomsbury',
    image: '/our-work/bloomsbury.png',
    description: 'Bloomsbury specializes in guiding businesses through their cloud-native transformation journey...',
    tags: ['UI DESIGN', 'UI DESIGN'],
  },
  {
    title: 'ZoopUp',
    image: '/our-work/zoopup.png',
    description: 'ZoopUp revolutionizes learning and earning, bridging independent talents and teachers with global...',
    tags: ['UI DESIGN', 'UI DESIGN'],
  },
  {
    title: 'SarvM .AI',
    image: '/our-work/sarvm-ai.png',
    description: 'The My Travel Journal application is intended for travel planning and travel diary keeping for...',
    tags: ['UI DESIGN', 'UI DESIGN'],
  },
];

export default function OurWork() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12">
          <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
            <span className="inline-block w-10 h-0.5 bg-primary" />
            Our Work
            <span className="inline-block w-10 h-0.5 bg-primary" />
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#23235F] text-center mt-2">Recent Case Studies</h2>
        </div>
        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
          {caseStudies.map((item, idx) => (
            <div key={idx} className="bg-swhite rounded-2xl overflow-hidden shadow-lg flex flex-col group transition-transform duration-300 hover:-translate-y-1">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={idx < 2}
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                {/* Title and Arrow Row */}
                <div className="flex items-start justify-between mb-1 gap-2">
                  <h3 className="text-lg md:text-xl font-bold text-heading group-hover:text-primary transition-colors mb-0">{item.title}</h3>
                  <button className="w-10 h-10 hover:rotate-45 flex items-center justify-center rounded-full bg-white border border-divider text-heading hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm ml-2 mt-[-6px]">
                    <FiArrowUpRight size={22} />
                  </button>
                </div>
                <p className="text-body text-sm md:text-base mb-4 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-4 mb-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-white border border-divider text-heading text-base font-semibold px-6 py-2 rounded-full shadow-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="flex justify-center">
          <button className="bg-primary text-white px-6 py-3 rounded-full font-display font-medium flex items-center gap-2 shadow-btn hover:shadow-btn-reverse hover:bg-primary/90 transition-colors">
            View More <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}
