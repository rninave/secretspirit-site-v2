'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  {
    name: 'SarvM.AI',
    logo: '/brands/sarvm-logo.png',
    alt: 'SarvM.AI Logo'
  },
  {
    name: 'Kanso Cloud',
    logo: '/brands/kanso-cloud-logo.png',
    alt: 'Kanso Cloud Logo'
  },
  {
    name: 'Eats Fresh',
    logo: '/brands/eats-fresh-logo.png',
    alt: 'Eats Fresh Logo'
  },
  {
    name: 'Zoop Up',
    logo: '/brands/zoop-up-logo.png',
    alt: 'Zoop Up Logo'
  },
  {
    name: 'Sphurit',
    logo: '/brands/sphurit-logo.png',
    alt: 'Sphurit Logo'
  },
  {
    name: 'Real State',
    logo: '/brands/real-state-logo.png',
    alt: 'Compound Real Estate Bonds Logo'
  }
]

export default function TrustedBrands() {
  return (
    <section className="py-6 md:py-8  bg-[#F6F8FE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title with lines */}
        <div className="flex items-center justify-center mb-10">
          <span className="hidden sm:inline-block w-16 h-1 bg-primary rounded-full mr-4" ></span>
          <h2 className="text-[12px] font-bold text-primary tracking-wider uppercase text-center whitespace-nowrap">Trusted by Brands</h2>
          <span className="hidden sm:inline-block w-16 h-1 bg-primary rounded-full ml-4" ></span>
        </div>
        {/* Brands Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="pb-8"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="relative w-28 h-8 md:w-32 md:h-10 lg:w-36 lg:h-12">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                  priority={index < 3}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
} 