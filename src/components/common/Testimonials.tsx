'use client';

import * as React from 'react';
import CaseStudyCard from '../ui/casestudycard';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const caseStudies = [
  {
    clientName: 'Rohit',
    description:
      'Secretspirit Solutions provided the right guidance and walked me through a very tough situation I had been struggling with for over a year. I’m truly grateful to their team.',
    clientLogo: '/testimonials/heda-healing.png',
  },
  {
    clientName: 'Hasnen Laxmidhar',
    description: 'Their proactive approach and commitment to quality truly set them apart.',
    clientLogo: '/testimonials/zantacore.png',
  },
  {
    clientName: 'Vinayak Nayak',
    description: 'The outcome was positive, and everything progressed smoothly.',
    clientLogo: '/testimonials/vncasting.png',
  },
  {
    clientName: 'Sanket Dangi',
    description:
      'We were impressed by their commitment, flexibility, easy accessibility, patience, and quick understanding.',
    clientLogo: '/testimonials/kansocloud.png',
  },
  {
    clientName: 'Vishal Khashu',
    description: 'They provided great value for money and paid close attention to detail.',
    clientLogo: '/testimonials/alchelyst.png',
  },
  {
    clientName: 'Harnish',
    description:
      'Secretspirit and team were a pleasure to work with—timely, efficient, and delivering top-notch results. I highly recommend their services.',
    clientLogo: '/testimonials/meruaccounting.png',
  },
];

export default function TestimonialsSection({classname = ''}) {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className={`bg-white py-14 md:py-16 px-4 sm:px-6 ${classname}`}>
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>

        <Carousel
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: 'start',
          }}
          className="relative"
        >
          <CarouselContent>
            {caseStudies.map((item, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 flex items-center justify-center pb-4 pr-2"
              >
                <CaseStudyCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Buttons */}
          <CarouselPrevious aria-label="Previous slide" className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow-lg hover:bg-primary/90 transition-colors cursor-pointer">
            <FiArrowLeft />
          </CarouselPrevious>
          <CarouselNext aria-label="Next slide" className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl shadow-lg hover:bg-primary/90 transition-colors cursor-pointer">
            <FiArrowRight />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
