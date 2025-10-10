'use client'

import React from 'react'
import Reveal from '@/components/common/Reveal'
import SectionHeader from '@/components/common/SectionHeader'

interface LifeCard {
  title: string
  body: string
}

interface LifeAtSecretspiritProps {
  subtitle?: string
  title?: string
  description?: string
  topCards: LifeCard[]
  bottomCards?: LifeCard[]
}

const LifeAtSecretspirit: React.FC<LifeAtSecretspiritProps> = ({
  subtitle = "Life at Secretspirit",
  title = "Life at Secretspirit",
  description = "At Secretspirit Solutions Pvt. Ltd., we believe in building more than a team—we foster a close-knit family of professionals. Here’s how we go the extra mile to support the overall well-being of our people.",
  topCards,
  bottomCards = [],
}) => {
  const renderCards = (cards: LifeCard[], cols: number, maxWidth?: string) => (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-6 ${maxWidth ? `max-w-${maxWidth} mx-auto` : ''} mb-6`}>
      {cards.map((card) => (
        <Reveal key={card.title}>
          <div className="bg-[#FFF6F4] rounded-xl p-6 shadow-md border min-h-[240px] border-divider">
            <h4 className="text-[16px] md:text-lg font-bold text-heading font-heading leading-[100%] mb-3">{card.title}</h4>
            <div className="w-12 h-0.5 bg-primary mb-4" />
            <p className="text-sm text-body font-body font-normal leading-6">{card.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )

  return (
    <section className="bg-white py-15">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeader
            subtitle={''}
            title={title}
            align="center"
            className="mb-4"
          />
        </Reveal>

        <Reveal>
          <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10">
            {description}
          </p>
        </Reveal>

        {renderCards(topCards, 3)}
        {bottomCards.length > 0 && renderCards(bottomCards, 2, '4xl')}
      </div>
    </section>
  )
}

export default LifeAtSecretspirit
