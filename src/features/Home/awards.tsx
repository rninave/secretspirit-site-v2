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
  {name: 'Award 1', imageLink: '/awards/award-2.png', hrefLink: 'https://techreviewer.co/companies/secretspirit-solutions'},
  {name: 'Award 2', imageLink: '/awards/award-1.png', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions'},
  {name: 'Award 3', imageLink: '/awards/award-3.png', hrefLink: 'https://www.designrush.com/agency/naming-agencies'},
  {name: 'Award 4', imageLink: '/awards/award-4.png', hrefLink: 'https://www.appfutura.com/companies/secretspirit-solutions'},
  {name: 'Award 5', imageLink: '/awards/award-5.png', hrefLink: 'https://www.topdevelopers.co/profile/secretspirits'},
  {name: 'Award 6', imageLink: '/awards/award-6.png', hrefLink: 'https://www.designrush.com/agency/profile/secretspirit-solutions'},
  {name: 'Award 7', imageLink: '/awards/award-7.png', hrefLink: 'https://www.webguruawards.com/sites/secretspirit-solutions'},
  {name: 'Award 8', imageLink: '/awards/award-8.svg', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions'},
];

export default function AwardsSection() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-white py-12 md:py-15 px-4">
      <div className="max-w-7xl relative mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="Accolades"
            title="Awards & Recognition"
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>
        <div className="">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false, // keep autoplay alive even if user interacts
              pauseOnMouseEnter: true,     // 👈 this pauses autoplay on hover
            }}
            breakpoints={{
              0: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1230: { slidesPerView: 6 },
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
              <SwiperSlide key={idx} className="flex items-center justify-center pt-2 pb-5">
                <a href={src?.hrefLink} target='_blank' className="bg-white rounded-xl shadow-award-card hover:shadow-lg mr-6 p-7 border border-divider flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 transition-transform duration-300 hover:scale-105 cursor-pointer">
                  <Image
                    src={src?.imageLink}
                    alt={`Award ${idx + 1}`}
                    width={100}
                    priority
                    height={100}
                    className="object-cover w-auto h-auto max-h-[100px]"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </a>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons - hidden on mobile */}
            <button
              ref={prevRef}
              className="cursor-pointer flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
              aria-label="Previous"
            >
              <FiArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="cursor-pointer flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
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
