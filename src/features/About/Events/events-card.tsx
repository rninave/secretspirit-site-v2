'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Event {
  title: string
  description: string
  images: string[]
}

const isVideo = (src: string) => src.toLowerCase().endsWith('.mp4') || src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.ogg')

const events: Event[] = [
   {
    title: 'A Sweet Break at Work',
    description:
      'More than just a treat, the Ice Cream Party was a small gesture to appreciate our hardworking team.',
    images: ['/events/sweet-break-1.jpeg', '/events/sweet-break-2.jpeg', '/events/sweet-break-3.jpeg', '/events/sweet-break-4.jpeg', '/events/sweet-break-5.jpeg', '/events/sweet-break-6.mp4', '/events/sweet-break-7.mp4'],
  },
  {
    title: 'CTRL + Play +Win',
    description:
      "From exciting mini-games to friendly competitions, the energy was high, the laughter was louder, and the team spirit was unbeatable.eded",
    images: ['/events/fun-day-6.jpeg', '/events/fun-day-2.jpeg', '/events/fun-day-3.jpeg', '/events/fun-day-4.jpeg', '/events/fun-day-5.jpeg', '/events/fun-day-1.jpeg'],
  },
  {
    title: 'Holi 2025',
    description:
      "This Holi, our office came alive with vibrant colors, cheerful laughter, and joyful moments as we celebrated the festival together.",
    images: ['/events/holi-1.jpeg', '/events/holi-2.jpeg', '/events/holi-3.jpeg', '/events/holi-4.jpeg', '/events/holi-5.jpeg', '/events/holi-6.jpeg'],
  },
    {
    title: 'Christmas 2025',
    description:
      'we celebrate gratitude, teamwork, and the journey we’ve shared throughout the year. As we wrap up another year of innovation and collaboration.',
    images: ['/events/christmas-2025-img1.jpeg', '/events/christmas-2025-img2.jpeg', '/events/christmas-2025-img3.jpeg', '/events/christmas-2025-img4.jpeg', '/events/christmas-2025-img5.jpeg', '/events/christmas-2025-img6.jpeg', '/events/christmas-2025-img7.jpeg', '/events/christmas-2025-img8.jpeg', '/events/christmas-2025-img9.jpeg', '/events/christmas-2025-img10.jpeg'],
  },
    {
    title: 'Brain Booster Sessions',
    description:
      'We last year conducted a Brain Booster Sessions, led by our own team members, where knowledge was shared, ideas were exchanged.',
    images: ['/events/sessions-2025-1.jpeg', '/events/sessions-2025-2.jpeg', '/events/sessions-2025-3.jpeg', '/events/sessions-2025-4.jpeg', '/events/sessions-2025-5.mp4', '/events/sessions-2025-6.jpeg', '/events/sessions-2025-7.jpeg', '/events/sessions-2025-8.jpeg', '/events/sessions-2025-9.jpeg', '/events/sessions-2025-10.jpeg', '/events/sessions-2025-11.jpeg', '/events/sessions-2025-12.jpeg', '/events/sessions-2025-13.jpeg', '/events/sessions-2025-14.jpeg', '/events/sessions-2025-15.jpeg', '/events/sessions-2025-16.jpeg', '/events/sessions-2025-17.jpeg', '/events/sessions-2025-18.jpeg'],
  },
  {
    title: 'Fun Alert 2024',
    description:
      'Our Team-Building Activity Day was a hit, filled with excitement and games that strengthened teamwork and camaraderie across the office!',
    images: [
      '/events/fun-alert-img1.jpeg',
      '/events/fun-alert-img2.jpeg',
      '/events/fun-alert-img3.jpeg',
      '/events/fun-alert-img4.jpeg',
      '/events/fun-alert-img5.jpeg',
      '/events/fun-alert-img6.jpeg',
      '/events/fun-alert-img7.jpeg',
      '/events/fun-alert-img8.jpeg',
      '/events/fun-alert-img9.jpeg',
      '/events/fun-alert-img10.jpeg',
      '/events/fun-alert-img11.jpeg',
      '/events/fun-alert-img12.jpeg',
      '/events/fun-alert-img13.jpeg',
    ],
  },
  {
    title: 'Yoga and Wellness Event 2024',
    description:
      'We found our inner peace at our Yoga and Wellness Event. Sessions promoting health, relaxation, and well-being were a highlight for all attendees.',
    images: ['/events/yoga-img1.jpeg', '/events/yoga-img2.jpeg', '/events/yoga-img3.jpeg', '/events/yoga-img4.jpeg'],
  },
  {
    title: 'Annual Outing 2024',
    description:
      'We embarked on an adventure with our Annual Outing. Exploring new places and bonding with colleagues created lasting memories for everyone involved.',
    images: ['/events/annual-outing-img1.jpeg', '/events/annual-outing-img2.jpeg', '/events/annual-outing-img3.jpeg', '/events/annual-outing-img4.jpeg', '/events/annual-outing-img5.jpeg', '/events/annual-outing-img6.jpeg'],
  },
  {
    title: 'Christmas Festivities 2023',
    description:
      'We immersed ourselves in the magic of Christmas with our festive celebrations. Carols, decorations, and the warmth of the holiday spirit were enjoyed by all.',
    images: ['/events/christmas-img1.jpeg', '/events/christmas-img2.jpeg', '/events/christmas-img3.jpeg'],
  },
  {
    title: 'Diwali Festival 2023',
    description:
      'We joined together for a sparkling Diwali Festival, filled with lights, sweets, and joyous celebrations. It was a night to remember.',
    images: ['/events/diwali-img.jpeg', '/events/diwali-img2.jpeg'],
  },
  {
    title: 'Lassi Fest 2023',
    description:
      'We cooled down and enjoyed the refreshing flavors at our Lassi Fest. The variety of delicious lassis made this unique festival a delightful experience.',
    images: ['/events/lassi-fest-img1.jpeg', '/events/lassi-fest-img2.jpeg'],
  },
  {
    title: 'Navratri Celebration 2023',
    description:
      'We celebrated the vibrant festival of Navratri. Dancing to the beats of Garba and Dandiya, everyone reveled in the festive spirit.',
    images: ['/events/navratri-img1.png', '/events/navratri-img2.jpeg', '/events/navratri-img3.jpeg', '/events/navratri-img4.jpeg'],
  },
  {
    title: 'Carrom Tournament',
    description:
      'We experienced the thrill of our Carrom Tournament, where strategy and skill came alive. It was a day of competitive fun and camaraderie.',
    images: ['/events/carrom-img1.jpeg', '/events/carrom-img2.jpeg', '/events/carrom-img3.jpeg', '/events/carrom-img4.jpeg'],
  },
]

export default function EventsCards() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeEventIndex, setActiveEventIndex] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // 🧠 Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const openModal = (eventIndex: number, imageIndex: number) => {
    setActiveEventIndex(eventIndex)
    setActiveImageIndex(imageIndex)
    setIsOpen(true)
  }

  const closeModal = () => setIsOpen(false)

  const showNext = () => {
    if (activeEventIndex === null) return
    const event = events[activeEventIndex]
    setActiveImageIndex((prev) => (prev + 1) % event.images.length)
  }

  const showPrev = () => {
    if (activeEventIndex === null) return
    const event = events[activeEventIndex]
    setActiveImageIndex(
      (prev) => (prev - 1 + event.images.length) % event.images.length
    )
  }

  return (
    <section className="bg-white py-15">
      <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-careers-job-card overflow-hidden transition-shadow duration-300"
          >
            <div
              className="relative cursor-pointer group"
              onClick={() => openModal(index, 0)}
            >
              <Image
                src={event.images[0]}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-lg font-bold font-heading mb-2 text-heading leading-[100%]">
                {event.title}
              </h3>
              <p className="text-sm text-body font-body leading-6 tracking-normal m-0">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {isOpen && activeEventIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-100000 flex items-center justify-center"
            onClick={closeModal}
          >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-16 right-2 z-100 lg:right-1/6 cursor-pointer text-black bg-white rounded-full p-2 hover:bg-white/70"
              >
                <X size={22} />
              </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="relative max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {isVideo(events[activeEventIndex].images[activeImageIndex]) ? (
                <video
                  src={events[activeEventIndex].images[activeImageIndex]}
                  controls
                  autoPlay
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={events[activeEventIndex].images[activeImageIndex]}
                  alt="Event media"
                  width={1200}
                  height={800}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
              )}


              {/* Navigation Arrows */}
              {events[activeEventIndex].images.length > 1 && (
                <>
                  <button
                    onClick={showPrev}
                    className="absolute left-0 sm:-left-2 top-1/2 cursor-pointer -translate-y-1/2 text-black bg-white rounded-full p-2 hover:bg-white/70"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={showNext}
                    className="absolute right-0 sm:-right-2 top-1/2 cursor-pointer -translate-y-1/2 text-black bg-white rounded-full p-2 hover:bg-white/70"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
