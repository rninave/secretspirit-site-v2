'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/common/SectionHeader'
import Reveal from '@/components/common/Reveal'

const brands = [
  {
    name: 'SarvM.AI',
    logo: '/brands/sarvm-logo.png',
    alt: 'SarvM.AI Logo'
  },
  {
    name: 'Kanso Cloud',
    logo: '/brands/kanso-cloud.png',
    alt: 'Kanso Cloud Logo'
  },
  {
    name: 'Eats Fresh',
    logo: '/brands/eats-fresh.png',
    alt: 'Eats Fresh Logo'
  },
  {
    name: 'Zoop Up',
    logo: '/brands/zoop-up-logo.png',
    alt: 'Zoop Up Logo'
  },
  {
    name: 'Sphurit',
    logo: '/brands/sphurit.png',
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
    logo: '/brands/fre-wise.png',
    alt: 'Fre8wise Logo'
  },
  {
    name: 'Alchelyst',
    logo: '/brands/alchelyst.png',
    alt: 'Alchelyst Logo'
  }
]

export default function TrustedBrandsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  const slideDuration = 2000
  const [slidesPerView, setSlidesPerView] = useState(6) // default desktop

  // Update slidesPerView based on window width
  const updateSlidesPerView = () => {
    const width = window.innerWidth
    if (width >= 1280) setSlidesPerView(6) // desktop
    else if (width >= 1024) setSlidesPerView(5) // laptop
    else if (width >= 640) setSlidesPerView(4) // tablet
    else setSlidesPerView(2) // mobile
  }

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      // Move to next item, loop back to 0 when reaching the end
      return prev >= brands.length - 1 ? 0 : prev + 1
    })
  }

  // Autoplay
  useEffect(() => {
    if (!hovered) {
      intervalRef.current = setInterval(nextSlide, slideDuration)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hovered, currentSlide])

  // Smooth scroll to current item (one by one) - Swiper-like smoothness
  useEffect(() => {
    if (!containerRef.current) return
    
    const container = containerRef.current
    
    // Cancel any ongoing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
      animationFrameRef.current = null
    }

    const firstChild = container.firstElementChild as HTMLElement
    if (!firstChild) return

    const itemWidth = firstChild.offsetWidth
    const gap = 24 // gap-6 = 1.5rem = 24px
    let targetScroll = currentSlide * (itemWidth + gap)
    let startScroll = container.scrollLeft
    
    // Handle seamless loop: if looping from last to first, instantly reset scroll
    if (currentSlide === 0 && startScroll > (brands.length - 2) * (itemWidth + gap)) {
      container.scrollLeft = 0
      startScroll = 0
    }
    
    const distance = targetScroll - startScroll
    
    // Skip animation if distance is very small
    if (Math.abs(distance) < 0.5) {
      container.scrollLeft = targetScroll
      return
    }

    const duration = 500 // 500ms for smooth animation
    let startTime: number | null = null

    // Smooth easing function (ease-out-cubic) - similar to Swiper
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3)
    }

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)

      container.scrollLeft = startScroll + distance * easedProgress

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animateScroll)
      } else {
        container.scrollLeft = targetScroll // Ensure exact position
        animationFrameRef.current = null
      }
    }

    animationFrameRef.current = requestAnimationFrame(animateScroll)

    // Cleanup on unmount
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
        animationFrameRef.current = null
      }
    }
  }, [currentSlide])

  return (
    <section className="py-12 md:py-15 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeader
            subtitle="Trusted by Brands"
            title=""
            align="center"
            className="mb-6"
          />
        </Reveal>

        <div
          ref={containerRef}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex gap-6 overflow-x-hidden no-scrollbar"
          style={{ scrollBehavior: 'auto' }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="shrink-0 flex items-center justify-center"
              style={{
                width: `calc(100% / ${slidesPerView} - 1.5rem)`
              }}
            >
              <div className="relative w-28 h-10 md:w-32 md:h-10 lg:w-36 lg:h-12">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, (max-width: 1024px) 128px, 144px"
                  priority={index < 3}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 