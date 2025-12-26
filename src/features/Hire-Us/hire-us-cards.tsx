'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '@/components/common/Reveal'
import Link from 'next/link'
import Image from 'next/image'
import { WobbleCard } from '@/components/ui/wobble-card'

const tabs = [
    {
        label: 'Hire Designer',
        value: 'Hire Designer',
        cardsData: [
            { title: 'User Researcher', iconPath: '/hire-us/user-research.svg', link: '/contact' },
            { title: 'UX Designer', iconPath: '/hire-us/ux-designer.svg', link: '/contact' },
            { title: 'UI Designer', iconPath: '/hire-us/ui-designer.svg', link: '/contact' },
            { title: 'Interaction Designer', iconPath: '/hire-us/interaction-designer.svg', link: '/contact' },
            { title: 'Product Designer', iconPath: '/hire-us/product-designer.svg', link: '/contact' },
            { title: 'Web Designer', iconPath: '/hire-us/web-designer.svg', link: '/contact' },
        ],
    },
    {
        label: 'Hire Developer',
        value: 'Hire Developer',
        cardsData: [
            { title: 'Angular Developer', iconPath: '/hire-us/angular-developer.svg', link: '/contact' },
            { title: 'Nextjs Developer', iconPath: '/hire-us/nextjs-developer.svg', link: '/contact' },
            { title: 'Vuejs Developer', iconPath: '/hire-us/vuejs-developer.svg', link: '/contact' },
            { title: 'Nodejs Developer', iconPath: '/hire-us/nodejs-developer.svg', link: '/contact' },
            { title: 'Reactjs Developer', iconPath: '/hire-us/reactjs-developer.svg', link: '/contact' },
            { title: 'UI Developer', iconPath: '/hire-us/ui-developer.svg', link: '/contact' },
        ],
    },
]

export default function HireUsCards() {
    const [activeTab, setActiveTab] = useState('Hire Designer')
    const [animating, setAnimating] = useState(false)
    const tab = tabs.find((t) => t.value === activeTab) || tabs[0]

    const handleTabChange = (value: string) => {
        if (value === activeTab) return
        setAnimating(true)
        setTimeout(() => {
            setActiveTab(value)
            setAnimating(false)
        }, 200)
    }

    return (
        <section className="bg-gray-light py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Tab Buttons */}
                <Reveal delayMs={50}>
                    <div className="flex justify-center gap-2 md:gap-4 mb-8 md:mb-10 flex-wrap">
                        {tabs.map((t) => (
                            <WobbleCard key={t.value}>
                                <button
                                    key={t.value}
                                    className={`px-5 md:px-8 py-2.5 md:py-3 cursor-pointer rounded-full font-medium font-body text-xs md:text-sm border transition-all duration-200 hover:shadow-btn focus:outline-none ${activeTab === t.value
                                        ? 'bg-primary/10 text-primary border-divider shadow-btn translate-y-0.5'
                                        : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10'
                                        }`}
                                    onClick={() => handleTabChange(t.value)}
                                >
                                    {t.label}
                                </button>
                            </WobbleCard>
                        ))}
                    </div>
                </Reveal>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tab.cardsData.map((card, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -5 }}
                            className={`group relative bg-white rounded-xl p-6 shadow-md cursor-pointer overflow-hidden transition-all duration-500 ease-in-out ${animating ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100 translate-y-0'
                                }`}
                        >
                            {/* Hover Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-2 group-hover:h-full bg-primary-hover transition-all duration-500 ease-in-out z-10" />

                            <div className="relative z-20 flex flex-col">
                                {/* Icon */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-hover text-primary text-xl mb-6">
                                    <Image
                                        className="object-cover w-6 h-6"
                                        priority={idx < 6}
                                        src={card.iconPath}
                                        alt={card.title}
                                        width={24}
                                        height={24}
                                    />

                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold mb-6 text-heading font-heading">
                                    {card.title}
                                </h3>

                                {/* Underline */}
                                <div className="w-20 shadow-about-card mb-6 h-0.5 bg-primary" />

                                {/* Link */}
                                <Link
                                    href={card.link}
                                    className="text-primary font-heading font-bold inline-flex items-center"
                                >
                                    Get Started Now <span className="ml-1">→</span>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
