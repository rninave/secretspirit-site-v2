'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SectionHeader from '@/components/common/SectionHeader';
import Reveal from '@/components/common/Reveal';

const brands = [
  {
    name: 'SarvM.AI',
    logo: '/brands/sarvm-logo.png',
    alt: 'SarvM.AI Logo'
  },
  {
    name: 'Kanso Cloud',
    logo: '/brands/kansocloud-logo.png',
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
  },
  {
    name: 'Stonners Lifestyle',
    logo: '/brands/stonners-lifestyle-logo.png',
    alt: 'Stonners Lifestyle Logo'
  },
  {
    name: 'Barter Voip',
    logo: '/brands/barter-voip-logo.png',
    alt: 'Barter Voip Logo'
  },
  {
    name: 'Fre8wise',
    logo: '/brands/fre-wise-logo.png',
    alt: 'Fre8wise Logo'
  },
  {
    name: 'Alchelyst',
    logo: '/brands/alchelyst-logo.png',
    alt: 'Alchelyst Logo'
  }
]

export default function TrustedBrandsSection() {
  return (
    <section className="py-12 md:py-15  bg-[#F6F8FE]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title with lines */}
        <Reveal>
          <SectionHeader
            subtitle="Trusted by Brands"
            title=""
            align="center"
            className="mb-6"
          />
        </Reveal>
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
          className="py-8"
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