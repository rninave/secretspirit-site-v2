'use client'
import React, { useEffect, useRef } from 'react'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delayMs?: number
  as?: keyof JSX.IntrinsicElements
}

export default function Reveal({ children, className = '', delayMs = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('reveal-visible')
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.15 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const style = delayMs ? { transitionDelay: `${delayMs}ms` } : undefined

  return (
    // @ts-ignore - dynamic tag
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  )
}


