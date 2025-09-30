'use client';

import Image from 'next/image';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';

const awards = [
  '/awards/award-1.png',
  '/awards/award-2.png',
  '/awards/award-3.png',
  '/awards/award-4.png',
  '/awards/award-5.png',
  '/awards/award-6.png',
  '/awards/award-7.png',
  '/awards/award-8.png',
  '/awards/award-9.png',
  '/awards/award-10.png',
];

export default function AwardsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-white py-14 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="Accolades"
            title="Awards & Recognition"
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 1800, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="pb-4 md:pb-8"
          >
            {awards.map((src, idx) => (
              <SwiperSlide key={src} className="flex items-center justify-center p-3 sm:p-4 md:p-8">
                <div className="bg-white rounded-xl shadow-md flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                  <Image
                    src={src}
                    alt={`Award ${idx + 1}`}
                    width={110}
                    height={110}
                    className="object-contain w-auto h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons - hidden on mobile */}
            <button
              ref={prevRef}
              className="hidden cursor-pointer sm:flex absolute left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Previous"
            >
              <FiArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="hidden cursor-pointer sm:flex absolute right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Next"
            >
              <FiArrowRight />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
