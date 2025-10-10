'use client'

import React from 'react'
import Image from 'next/image'
import Reveal from '@/components/common/Reveal'

interface TimelineItem {
    title: string
    body: string
    icon: string
    side: 'left' | 'right'
}

export interface TimelineProps {
    items: TimelineItem[]
}

const Timeline = ({ items }: TimelineProps) => {
    return (
        <section className="bg-heading py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="space-y-20">
                    {items.map((item, idx) => {
                        const isLeft = item.side === 'left'
                        return (
                            <div key={idx} className="flex items-center mb-4 md:mb-0 justify-between gap-6 md:gap-4">
                                {isLeft && (
                                    <div className="md:w-[46%]">
                                        <Reveal>
                                            <div className="bg-[#2B2946] rounded-r-full rounded-l-md relative p-8 pr-16 pb-6">
                                                <div className="flex flex-col items-end text-end  text-white">
                                                    <div className="mb-4 bg-transparent">
                                                        <Image src={item.icon} alt={`${item.title} Icon`} width={40} height={40} className='w-auto h-auto' />
                                                    </div>
                                                    <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                                                    <p className="text-sm text-white/80 max-w-[341px] mb-4 leading-6">{item.body}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    </div>
                                )}

                                <div className="flex-1">
                                    <Reveal>
                                        <div className="h-px bg-[#FF5A1F] relative">
                                            <span
                                                className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF5A1F] rounded-full ${isLeft ? '-left-3' : '-right-3'
                                                    }`}
                                            />
                                        </div>
                                    </Reveal>
                                </div>

                                {!isLeft && (
                                    <div className="md:w-[46%]">
                                        <Reveal>
                                            <div className="bg-[#2B2946] rounded-l-full rounded-r-md p-8 pl-16 pb-6 relative">
                                                <div className="flex flex-col items-start text-start text-white">
                                                    <div className="mb-4 bg-transparent">
                                                        <Image src={item.icon} alt={`${item.title} Icon`} width={40} height={40} className='w-auto h-auto' />
                                                    </div>
                                                    <h3 className="text-lg mb-4 font-bold font-heading leading-[100%]">{item.title}</h3>
                                                    <p className="text-sm mb-4 font-body font-normal text-white/80 max-w-[341px] leading-6">{item.body}</p>
                                                </div>
                                            </div>
                                        </Reveal>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Timeline
