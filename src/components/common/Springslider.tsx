'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

interface SpringSliderProps {
    items: { src: string; link?: string; alt?: string }[];
    className?: string;
}

export default function SpringSlider({ items, className }: SpringSliderProps) {
    return (
        <div className={`w-full ${className} pb-4`}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper pb-3"
            >
                {items.map((item, idx) => (
                    <SwiperSlide key={idx} className=''>
                        {item.link ? (
                            <a href={item.link} className='border border-gray-200 p-4 flex items-center justify-center bg-white rounded-lg shadow-sm'
                             target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.src}
                                    alt={item.alt || `slide-${idx}`}
                                    width={100}
                                    priority
                                    height={100}
                                    className="object-contain w-auto h-auto min-h-[100px] max-h-[100px]"
                                    style={{ width: 'auto', height: 'auto' }}

                                />
                            </a>
                        ) : (
                            <Image
                                src={item.src}
                                alt={item.alt || `slide-${idx}`}
                                width={100}
                                height={100}
                                className="object-cover  rounded-lg"
                            />
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
