
"use client";
import CaseStudyCard from "../ui/casestudycard";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { useRef } from 'react';

const caseStudies = [
    {
        clientName: "Rohit",
        description: "Secretspirit Solutions provided the right guidance and walked me through a very tough situation I had been struggling with for over a year. I’m truly grateful to their team.",
        clientLogo: "/testimonials/heda-healing.png",
    },
    {
        clientName: "Hasnen Laxmidhar",
        description: "Their proactive approach and commitment to quality truly set them apart.",
        clientLogo: "/testimonials/zantacore.png",
    },
    {
        clientName: "Vinayak Nayak",
        description: "The outcome was positive, and everything progressed smoothly.",
        clientLogo: "/testimonials/vncasting.png",
    },
    {
        clientName: "Sanket Dangi",
        description: "We were impressed by their commitment, flexibility, easy accessibility, patience, and quick understanding.",
        clientLogo: "/testimonials/kansocloud.png",
    },
    {
        clientName: "Vishal Khashu",
        description: "They provided great value for money and paid close attention to detail.",
        clientLogo: "/testimonials/alchelyst.png",
    },
    {
        clientName: "Harnish",
        description: "Secretspirit and team were a pleasure to work with—timely, efficient, and delivering top-notch results. I highly recommend their services.",
        clientLogo: "/testimonials/meruaccounting.png",
    }
];
export default function TestimonialsSection() {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section className="bg-white py-14 md:py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Title */}
                <Reveal>
                    <SectionHeader
                        subtitle="Testimonials"
                        title="What Our Clients Say"
                        align="center"
                        className="mb-8 md:mb-10"
                    />
                </Reveal>
                {/* Case Studies Carousel */}
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false, // keep autoplay alive even if user interacts
                            pauseOnMouseEnter: true,     // 👈 this pauses autoplay on hover
                        }}
                        breakpoints={{
                            940: { slidesPerView: 2 },
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
                    >
                        {caseStudies.map((item, idx) => (
                            <SwiperSlide key={idx} className="flex items-center justify-center pb-4 pr-2">
                                <CaseStudyCard item={item} />
                            </SwiperSlide>
                        ))}
                        {/* Custom Navigation Buttons - hidden on mobile */}
                        <button
                            ref={prevRef}
                            className=" cursor-pointer flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
                            aria-label="Previous"
                        >
                            <FiArrowLeft className="text-center" />
                        </button>
                        <button
                            ref={nextRef}
                            className=" cursor-pointer flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary items-center justify-center text-white text-xl shadow-lg hover:bg-primary/90 transition-colors"
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
