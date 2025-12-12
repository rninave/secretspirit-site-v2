'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Reveal from '@/components/common/Reveal'
import SectionHeader from '@/components/common/SectionHeader'
import Link from 'next/link'

const awards = [
  { name: 'Award 1', imageLink: '/awards/award-2.png', hrefLink: 'https://techreviewer.co/companies/secretspirit-solutions' },
  { name: 'Award 2', imageLink: '/awards/award-1.png', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions' },
  { name: 'Award 3', imageLink: '/awards/award-3.png', hrefLink: 'https://www.designrush.com/agency/naming-agencies' },
  { name: 'Award 4', imageLink: '/awards/award-4.png', hrefLink: 'https://www.appfutura.com/companies/secretspirit-solutions' },
  { name: 'Award 5', imageLink: '/awards/award-5.png', hrefLink: 'https://www.topdevelopers.co/profile/secretspirits' },
  { name: 'Award 6', imageLink: '/awards/award-6.png', hrefLink: 'https://www.designrush.com/agency/profile/secretspirit-solutions' },
  { name: 'Award 7', imageLink: '/awards/award-7.png', hrefLink: 'https://www.webguruawards.com/sites/secretspirit-solutions' },
  { name: 'Award 8', imageLink: '/awards/award-8.svg', hrefLink: 'https://www.goodfirms.co/company/secretspirit-solutions' },
]

export default function AwardsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const slideDuration = 4000
  const tickRate = 50
  const [slidesPerView, setSlidesPerView] = useState(6) // default desktop

  // Update slidesPerView based on window width
  const updateSlidesPerView = () => {
    const width = window.innerWidth
    if (width >= 1280) setSlidesPerView(6) // desktop
    else if (width >= 1024) setSlidesPerView(5) // laptop
    else if (width >= 768) setSlidesPerView(4) // tablet
    else setSlidesPerView(2) // mobile
  }

  useEffect(() => {
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const totalPages = Math.ceil(awards.length / slidesPerView)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalPages)
    setProgress(0)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalPages) % totalPages)
    setProgress(0)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setProgress(0)
  }

  // Autoplay & progress
  useEffect(() => {
    if (!hovered) {
      intervalRef.current = setInterval(nextSlide, slideDuration)
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const next = prev + (tickRate / slideDuration) * 100
          return next >= 100 ? 100 : next
        })
      }, tickRate)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [hovered, currentSlide, slidesPerView])

  // Scroll to current "page"
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current
      const cardWidth = container.scrollWidth / awards.length
      container.scrollTo({
        left: currentSlide * cardWidth * slidesPerView,
        behavior: 'smooth',
      })
    }
  }, [currentSlide, slidesPerView])

  return (
    <section
      className="bg-white py-12 md:py-16 px-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <Reveal>
          <SectionHeader
            subtitle="Accolades"
            title="Awards & Recognition"
            align="center"
            className="mb-8 md:mb-10"
          />
        </Reveal>

        <div className="relative">
          {/* Cards */}
          <div
            ref={containerRef}
            className="flex gap-4 py-4 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing"
          >
            {awards.map((award, index) => (
              <Link
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                key={index}
                aria-label={`View details about ${award.name}`}
                href={award.hrefLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`shrink-0 bg-white border border-gray-200 shadow-award-card hover:shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 flex items-center justify-center p-6 sm:p-8  h-24 sm:h-36 md:h-44`}
                style={{
                  width: `calc(100% / ${slidesPerView} - 1rem)`
                }}
              >
                <Image
                  src={award.imageLink}
                  alt={award.name}
                  width={100}
                  height={100}
                  className="object-contain w-auto h-auto max-h-24"
                  loading="eager"
                />
              </Link>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="absolute left-0 top-[44%] -translate-y-[44%] -translate-x-1/2 bg-primary cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-10"
          >
            <FiArrowLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next slide"
            onClick={nextSlide}
            className="absolute right-0 top-[44%] -translate-y-[44%] translate-x-1/2 bg-primary cursor-pointer text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-10"
          >
            <FiArrowRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className="w-6 sm:w-8 h-1.5 bg-gray-300 rounded overflow-hidden relative cursor-pointer"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-primary transition-[width] duration-50 linear"
                  style={{ width: currentSlide === index ? `${progress}%` : '0%' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
