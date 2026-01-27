'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '@/components/common/Reveal'
import SectionHeader from '@/components/common/SectionHeader'

const timelineData = [
    { year: '2019', title: 'Inception and Growth', description: 'In 2019, our journey began with a vision to offer exceptional UI/UX design and front-end development services. We started in a co-working space, laying the groundwork for our IT company. Two months later, recognizing the potential for growth, we moved into a rented office space, where our commitment to innovation and client satisfaction took root.', image: '/evolution/2019.png' },
    { year: '2020', title: 'Adapting to New Realities', description: 'In 2020, as the world grappled with the challenges posed by the COVID-19 pandemic, we made the crucial decision to sell our rented office space and transition to a remote work model. This change allowed us to ensure the safety of our team while continuing to deliver top-quality UI/UX design and front-end development services to our clients.', image: '/evolution/2020.png' },
    { year: '2021', title: 'A Return to Office Excellence', description: 'In 2021, we eagerly embraced a return to the office. Our team resumed their work at our Nikol-area office, where the synergy of our UI/UX design and front-end development experts flourished. We remained committed to delivering cutting-edge solutions for our clients.', image: '/evolution/2021.png' },
    { year: '2022', title: 'Expanding and Innovating', description: 'In 2022, our journey took a significant leap forward. We expanded our team, welcoming four talented professionals who shared our dedication to UI/UX excellence and front-end development. To accommodate our growing workforce and bolster our capabilities, we transitioned to a larger, self-owned office space. As a testament to our commitment, we also registered as a Private Limited IT firm, solidifying our position in the industry and setting the stage for continued growth and innovation.', image: '/evolution/2022.png' },
    { year: '2023', title: 'Embracing Team Culture', description: 'In 2023, we initiated a vibrant team culture by introducing engaging fun activities and celebrating festivals. Our goal is to foster a warm and inclusive work environment that brings our team members together, making every day at the workplace a celebration of togetherness and shared experiences.', image: '/evolution/2023.png' },
    { year: '2024', title: 'Embracing Team Culture 1', description: 'In 2023, we initiated a vibrant team culture by introducing engaging fun activities and celebrating festivals. Our goal is to foster a warm and inclusive work environment that brings our team members together, making every day at the workplace a celebration of togetherness and shared experiences.', image: '/events/annual-outing-img1.jpeg' },
    { year: '2025', title: 'AI-Driven Evolution', description: 'In 2025, we embraced AI-powered design and development workflows to step into the future. We focused on intelligent, prompt-based design solutions and streamlined UI/UX processes. By exploring AI-assisted front-end development, we enhanced efficiency and creativity. This year marked our shift toward innovation-led, scalable, AI-driven digital experiences.', image: '/evolution/2025.jpeg' },
]

export default function Evolution() {
    const [active, setActive] = useState(0)

    const getVisibleYears = () => {
        if (timelineData.length <= 3) return timelineData
        if (active === 0) return timelineData.slice(0, 3)
        if (active === timelineData.length - 1) return timelineData.slice(-3)
        return timelineData.slice(active - 1, active + 2)
    }

    const visibleYears = getVisibleYears()

    const computeGlobalIndex = (visibleIndex: number) => {
        if (timelineData.length <= 3) return visibleIndex
        if (active === 0) return visibleIndex
        if (active === timelineData.length - 1) return timelineData.length - 3 + visibleIndex
        return active - 1 + visibleIndex
    }

    // Orange vertical line height logic for desktop (0%, 50%, 100%)
    const progressPercent = (() => {
        if (active === 0) return 0
        if (active === timelineData.length - 1) return 88
        return 45
    })()

    // Mobile horizontal line logic (same as above)
    const mobileProgress = progressPercent;

    return (
        <section className="relative bg-white text-body py-15">
            <Reveal>
                <SectionHeader
                    title="Secretspirit's Evolution"
                    subtitle=""
                    align="center"
                    className="mb-4"
                />
            </Reveal>

            <Reveal>
                <p className="text-center px-4 font-body max-w-[590px] mx-auto text-body text-sm md:text-base leading-7 mb-20">
                    Our timeline tracks our evolution in the IT industry, highlighting our commitment to delivering exceptional UI/UX design and front-end development through every stage of our growth.
                </p>
            </Reveal>
            <Reveal>
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10 md:min-h-[70vh]">

                    {/* Timeline Section */}
                    <div className="relative w-full md:w-1/4 flex flex-col items-center justify-between">

                        {/* Desktop vertical line */}
                        <div className="hidden md:block absolute h-[62dvh] md:left-[80%] lg:left-[72%] xl:left-[67.5%] top-2 bottom-0 w-[2px] bg-gray-200 rounded" />
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${progressPercent}%` }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="hidden md:block absolute md:left-[80%] lg:left-[72%] xl:left-[67.5%] h-full top-2 bottom-0 w-[2px] bg-orange-500 origin-top rounded "
                        />

                        {/* Mobile horizontal line */}
                        <div className="block md:hidden absolute left-4  xs:left-6 xss:right-5 xs:right-2  w-[90%] top-[12%] h-[2px] bg-gray-200 rounded" />
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${mobileProgress}%` }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                            className="block md:hidden absolute left-4  xs:left-6 top-[12%] h-[2px] bg-orange-500 origin-left rounded"
                        />

                        {/* Dots + Years */}
                        <div className="flex md:flex-col flex-row w-full items-center justify-between h-full md:w-auto z-20 space-x-16  xxs:space-x-22 xs:space-x-32  md:mb-24 last:mb-0 md:space-x-0">
                            {visibleYears.map((item, i) => {
                                const idx = computeGlobalIndex(i)
                                return (
                                    <motion.button
                                        key={item.year}
                                        onClick={() => setActive(idx)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.35, delay: i * 0.08 }}
                                        className="relative flex md:flex-row flex-col items-center justify-between gap-2 md:gap-0 md:mb-10  cursor-pointer bg-transparent border-0 focus:outline-none w-full"
                                    >
                                        {/* Year on left */}
                                        <motion.span
                                            whileHover={{ scale: 1.05 }}
                                            className={`text-sm xs:text-xl md:text-[32px] font-heading leading-[100%] font-bold md:mr-4 md:order-1 order-2 ${idx === active || idx < active ? 'text-orange-500' : 'text-gray-700'}`}
                                        >
                                            {item.year}
                                        </motion.span>

                                        {/* Dot (aligned center) */}
                                        <motion.span
                                            layout
                                            animate={{
                                                scale: idx === active ? 1.15 : 1,
                                                backgroundColor: idx === active || idx < active ? '#F97316' : '#CBD5E1',
                                                borderColor: idx === active || idx < active ? '#F97316' : '#CBD5E1',
                                                boxShadow: idx === active || idx < active ? '0 6px 18px rgba(249,115,22,0.18)' : 'none',
                                            }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                            className="w-4 h-4 rounded-full border-2 md:absolute md:left-1/1"
                                        />
                                    </motion.button>
                                )
                            })}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={timelineData[active].year}
                                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="flex flex-col lg:flex-row items-center gap-6 w-full"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: -30, rotate: -2 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{ duration: 0.45 }}
                                    className="w-full md:w-[75%] lg:w-1/2"
                                >
                                    <Image
                                        src={timelineData[active].image}
                                        alt={`Timeline image for ${timelineData[active].year}: ${timelineData[active].title}`}
                                        width={316}
                                        height={226}
                                        className="rounded-xl shadow-lg object-cover w-full h-auto"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30, rotate: 2 }}
                                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                                    transition={{ duration: 0.45, delay: 0.08 }}
                                    className="w-full lg:w-1/2 py-4"
                                >
                                    <h3 className="text-2xl font-bold font-heading mb-4 leading-[100%] text-orange-500">
                                        {timelineData[active].title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-6 font-normal font-body">
                                        {timelineData[active].description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}
