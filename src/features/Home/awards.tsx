'use client';

import * as React from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Reveal from '@/components/common/Reveal';
import SectionHeader from '@/components/common/SectionHeader';

const awards = [
  { name: 'Award 1', imageLink: '/awards/award-2.png', hrefLink: 'https://techreviewer.co/companies/secretspirit-solutions' },
  { name: 'Award 2', imageLink: '/awards/award-1.png', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions' },
  { name: 'Award 3', imageLink: '/awards/award-3.png', hrefLink: 'https://www.designrush.com/agency/naming-agencies' },
  { name: 'Award 4', imageLink: '/awards/award-4.png', hrefLink: 'https://www.appfutura.com/companies/secretspirit-solutions' },
  { name: 'Award 5', imageLink: '/awards/award-5.png', hrefLink: 'https://www.topdevelopers.co/profile/secretspirits' },
  { name: 'Award 6', imageLink: '/awards/award-6.png', hrefLink: 'https://www.designrush.com/agency/profile/secretspirit-solutions' },
  { name: 'Award 7', imageLink: '/awards/award-7.png', hrefLink: 'https://www.webguruawards.com/sites/secretspirit-solutions' },
  { name: 'Award 8', imageLink: '/awards/award-8.svg', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions' },
];

export default function AwardsSection() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: true, // pauses on hover
    })
  );

  return (
    <section className="bg-white py-12 md:py-15 px-4">
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeader
            subtitle="Accolades"
            title="Awards & Recognition"
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
          className="relative w-full"
        >
          <CarouselContent className="flex items-center justify-center">
            {awards.map((award, idx) => (
              <CarouselItem
                key={idx}
                className="basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 flex items-center justify-center"
              >
                <a
                  href={award.hrefLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl shadow-award-card hover:shadow-lg mr-6 p-7 border border-divider flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <Image
                    src={award.imageLink}
                    alt={award.name}
                    width={100}
                    height={100}
                    loading="eager"
                    priority
                    className="object-contain w-auto h-auto max-h-[100px]"
                  />
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation buttons */}
          <CarouselPrevious className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 !bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
            <FiArrowLeft />
          </CarouselPrevious>
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10 !bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors">
            <FiArrowRight />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
