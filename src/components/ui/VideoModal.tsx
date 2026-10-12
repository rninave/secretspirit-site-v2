'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  youtubeId: string
  title?: string
}

export default function VideoModal({ isOpen, onClose, youtubeId, title = 'YouTube video player' }: VideoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Prevent background scroll and close on Escape while open
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = 'hidden'
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!mounted) return null

  // Portal to body so transformed ancestors don't break the fixed overlay
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100000 flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute -top-12 right-0 cursor-pointer text-black bg-white rounded-full p-2 hover:bg-white/70"
            >
              <X size={22} />
            </button>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
