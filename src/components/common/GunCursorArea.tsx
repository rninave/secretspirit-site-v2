'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

type GunCursorAreaProps = {
  children: React.ReactNode
  className?: string
  as?: keyof React.JSX.IntrinsicElements
}

type Bubble = {
  id: number
  x: number
  y: number
  dx: number
  dy: number
  size: number
  hue: number
}

const GUN_SIZE = 140
// Muzzle tip position inside /public/ss-gun.png, as a fraction of the image size
const MUZZLE_X_FRAC = 0.12
const MUZZLE_Y_FRAC = 0.08
// Direction the barrel points (grip -> muzzle), used to launch bubbles outward
const BARREL_DIR = { x: -0.51, y: -0.86 }
// How often a new burst fires while the mouse button is held down
const FIRE_INTERVAL_MS = 140

export default function GunCursorArea({ children, className = '', as: Tag = 'div' }: GunCursorAreaProps) {
  const containerRef = useRef<HTMLElement | null>(null)
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const [showCursor, setShowCursor] = useState(false)
  const [recoil, setRecoil] = useState(false)
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const bubbleId = useRef(0)
  const posRef = useRef<{ x: number; y: number } | null>(null)
  const fireIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const getPoint = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return null
    return { x: e.clientX - rect.left, y: e.clientY - rect.top }
  }, [])

  const fireBurst = useCallback((point: { x: number; y: number }) => {
    setRecoil(true)
    setTimeout(() => setRecoil(false), 140)

    const burst: Bubble[] = Array.from({ length: 3 }).map(() => {
      const id = bubbleId.current++
      const spread = ((Math.random() - 0.5) * 40 * Math.PI) / 180
      const cos = Math.cos(spread)
      const sin = Math.sin(spread)
      const dirX = BARREL_DIR.x * cos - BARREL_DIR.y * sin
      const dirY = BARREL_DIR.x * sin + BARREL_DIR.y * cos
      const distance = 50 + Math.random() * 45
      return {
        id,
        x: point.x,
        y: point.y,
        dx: dirX * distance,
        dy: dirY * distance,
        size: 10 + Math.random() * 16,
        hue: Math.floor(Math.random() * 360),
      }
    })

    setBubbles((prev) => [...prev, ...burst])
    burst.forEach((b) => {
      setTimeout(() => {
        setBubbles((prev) => prev.filter((item) => item.id !== b.id))
      }, 900)
    })
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const point = getPoint(e)
      if (point) {
        posRef.current = point
        setPos(point)
        setShowCursor(true)
      }
    },
    [getPoint]
  )

  const stopFiring = useCallback(() => {
    if (fireIntervalRef.current) {
      clearInterval(fireIntervalRef.current)
      fireIntervalRef.current = null
    }
  }, [])

  useEffect(() => {
    window.addEventListener('mouseup', stopFiring)
    return () => {
      window.removeEventListener('mouseup', stopFiring)
      stopFiring()
    }
  }, [stopFiring])

  const handleMouseLeave = useCallback(() => {
    setShowCursor(false)
    setPos(null)
    stopFiring()
  }, [stopFiring])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      const point = getPoint(e)
      if (!point) return
      posRef.current = point
      fireBurst(point)

      stopFiring()
      fireIntervalRef.current = setInterval(() => {
        if (posRef.current) fireBurst(posRef.current)
      }, FIRE_INTERVAL_MS)
    },
    [getPoint, fireBurst, stopFiring]
  )

  const active = showCursor && pos !== null
  const Component = Tag as React.ElementType

  return (
    <Component
      ref={containerRef}
      className={`relative ${active ? 'cursor-none' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={stopFiring}
    >
      {children}

      {active && pos && (
        <Image
          src="/ss-gun.png"
          alt=""
          width={GUN_SIZE}
          height={GUN_SIZE}
          aria-hidden="true"
          draggable={false}
          className={`pointer-events-none absolute z-50 select-none transition-transform duration-150 ease-out ${recoil ? 'scale-90 -rotate-6' : 'scale-100'}`}
          style={{
            left: pos.x - GUN_SIZE * MUZZLE_X_FRAC,
            top: pos.y - GUN_SIZE * MUZZLE_Y_FRAC,
          }}
        />
      )}

      {bubbles.map((b) => (
        <span
          key={b.id}
          aria-hidden="true"
          className="animate-bubble-pop pointer-events-none absolute z-40 rounded-full"
          style={
            {
              left: b.x,
              top: b.y,
              width: b.size,
              height: b.size,
              background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.95), hsla(${b.hue}, 90%, 65%, 0.5) 55%, hsla(${(b.hue + 70) % 360}, 90%, 60%, 0.15) 100%)`,
              border: `1px solid hsla(${b.hue}, 90%, 80%, 0.6)`,
              boxShadow: `0 0 6px hsla(${b.hue}, 90%, 70%, 0.35)`,
              '--bubble-dx': `${b.dx}px`,
              '--bubble-dy': `${b.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </Component>
  )
}
