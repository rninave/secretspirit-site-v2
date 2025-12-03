'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import AppBreadcrumb from './AppBreadcrumb'
import Reveal from './Reveal'
import AnimatedButton from './AnimatedButton'

interface PageHeroProps {
  title: string
  subtitle?: string
  bgImage?: string
  overlayColor?: string
  bgstyle?: string
  breadcrumbItems?: { label: string; href?: string }[]
  className?: string,
  btn?: {label: string, href?:string}
}

/**
 * PageHero — a reusable hero banner for inner pages.
 * Features:
 *  - Background image with overlay
 *  - Breadcrumb navigation (uses AppBreadcrumb)
 *  - Dynamic title + subtitle
 */
export default function PageHero({
  title,
  subtitle,
  bgImage = '/images/hero-bg.jpg', // fallback image
  overlayColor = 'bg-black/60', // overlay tone
  breadcrumbItems,
  bgstyle,
  className,
  btn
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative w-full md:min-h-[316px] flex items-center justify-center text-center text-white overflow-hidden',
        className
      )}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          className="object-cover object-center"
        />
        <div className={cn('absolute inset-0', overlayColor)} style={{
    background: bgstyle
  }} />
      </div>

      {/* Content */}
      <Reveal>
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-16">
        {breadcrumbItems && (
          <div className="mb-4">
            <AppBreadcrumb items={breadcrumbItems} />
          </div>
        )}

        <h1 className="text-3xl mb-4 text-white md:text-[42px] font-bold tracking-normal leading-[50px] font-heading">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-base md:text-xl text-white mx-auto max-w-4xl leading-8 tracking-normal font-body mb-4">
            {subtitle}
          </p>
        )}
        {btn && (
          <div className='flex justify-center'>
            <AnimatedButton  text={btn.label} hoverText={btn.label} className='cursor-pointer flex bg-primary text-white px-4 py-3 rounded-full font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2'/>
          </div>
        )}
      </div>
      </Reveal>
    </section>
  )
}
