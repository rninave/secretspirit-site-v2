'use client'

import { CSSProperties, useEffect, useState } from 'react'

// Also read by the inline <head> script in app/layout.tsx
const INTRO_SEEN_KEY = 'ss-intro-seen'
// Must match the total length of the CSS timelines in globals.css (.ss-intro)
const INTRO_DURATION_MS = 3150
const REDUCED_MOTION_DURATION_MS = 1600
const BRAND = 'Secretspirit'
// Letters from this index on ("spirit") use the brand accent colour
const ACCENT_FROM = 6

/**
 * IntroLoader — first-visit splash screen.
 * "Secretspirit" rises letter by letter on a white screen with an underline sweep,
 * tagline and 0→100 counter, then a white + orange double curtain wipes left to right
 * to reveal the page. Plays once per session.
 */
export default function IntroLoader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (document.documentElement.classList.contains('ss-intro-skip')) {
      setVisible(false)
      return
    }

    try {
      sessionStorage.setItem(INTRO_SEEN_KEY, '1')
    } catch {}

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow
      setVisible(false)
    }, reducedMotion ? REDUCED_MOTION_DURATION_MS : INTRO_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!visible) return null

  return (
    <div className="ss-intro" aria-hidden="true">
      <div className="ss-intro-curtain ss-intro-curtain--accent" />
      <div className="ss-intro-curtain">
        <div className="ss-intro-content">
          <div className="ss-intro-word font-heading">
            {BRAND.split('').map((letter, i) => (
              <span key={i} className="ss-intro-mask">
                <span
                  className={`ss-intro-letter${i >= ACCENT_FROM ? ' ss-intro-letter--accent' : ''}`}
                  style={{ '--i': i } as CSSProperties}
                >
                  {letter}
                </span>
              </span>
            ))}
          </div>
          <p className="ss-intro-tagline font-body">Research · Design · Develop</p>
        </div>
        <span className="ss-intro-count font-heading" />
      </div>
    </div>
  )
}
