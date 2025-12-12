'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SpringSliderProps {
    items: { src: string; link?: string; alt?: string }[];
    className?: string;
}

export default function SpringSlider({ items, className }: SpringSliderProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const [hovered, setHovered] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const slideDuration = 2500
    const [slidesPerView, setSlidesPerView] = useState(1) // default mobile

    // Update slidesPerView based on window width
    const updateSlidesPerView = () => {
        const width = window.innerWidth
        if (width >= 1280) setSlidesPerView(6) // desktop
        else if (width >= 1024) setSlidesPerView(4) // laptop
        else if (width >= 768) setSlidesPerView(3) // tablet
        else if (width >= 640) setSlidesPerView(3) // small tablet
        else setSlidesPerView(1) // mobile
    }

    useEffect(() => {
        updateSlidesPerView()
        window.addEventListener('resize', updateSlidesPerView)
        return () => window.removeEventListener('resize', updateSlidesPerView)
    }, [])

    const totalPages = Math.ceil(items.length / slidesPerView)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalPages)
    }

    // Autoplay
    useEffect(() => {
        if (!hovered) {
            intervalRef.current = setInterval(nextSlide, slideDuration)
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [hovered, currentSlide, slidesPerView])

    // Scroll to current "page"
    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current
            const cardWidth = container.scrollWidth / items.length
            container.scrollTo({
                left: currentSlide * cardWidth * slidesPerView,
                behavior: 'smooth',
            })
        }
    }, [currentSlide, slidesPerView, items.length])

    const getSpaceBetween = () => {
        const width = window.innerWidth
        if (width >= 1280) return 40
        if (width >= 1024) return 30
        if (width >= 768) return 20
        if (width >= 640) return 10
        return 10
    }

    return (
        <div className={`w-full ${className} pb-4`}>
            <div
                ref={containerRef}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="flex gap-2 sm:gap-2 md:gap-5 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth pb-3"
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="shrink-0"
                        style={{
                            width: `calc(100% / ${slidesPerView} - ${getSpaceBetween() * (slidesPerView - 1) / slidesPerView}px)`
                        }}
                    >
                        {item.link ? (
                            <Link 
                                href={item.link} 
                                className='border border-gray-200 p-4 flex items-center justify-center bg-white rounded-lg shadow-sm'
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt || `slide-${idx}`}
                                    width={100}
                                    priority={idx < 3}
                                    height={100}
                                    className="object-contain w-auto h-auto min-h-[100px] max-h-[100px]"
                                    style={{ width: 'auto', height: 'auto' }}
                                />
                            </Link>
                        ) : (
                            <Image
                                src={item.src}
                                alt={item.alt || `slide-${idx}`}
                                width={100}
                                height={100}
                                className="object-cover rounded-lg"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
