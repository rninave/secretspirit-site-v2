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

  const renderCards = (cards: LifeCard[], cols: number, maxWidth?: string) => {
    const colClass =
      cols === 1 ? 'md:grid-cols-1' :
      cols === 2 ? 'md:grid-cols-2' :
      cols === 3 ? 'md:grid-cols-3' :
      'md:grid-cols-1'

    const maxWidthClass =
      maxWidth === '4xl' ? 'max-w-4xl mx-auto' :
      maxWidth === '5xl' ? 'max-w-5xl mx-auto' :
      maxWidth ? `max-w-${maxWidth} mx-auto` : ''

    return (
      <div className={`grid grid-cols-1 ${colClass} gap-6 ${maxWidthClass} mb-6`}>
        {cards.map((card) => (
          <Reveal key={card.title}>
            <div className="bg-primary-hover h-full  rounded-xl p-6 shadow-md border border-divider hover:shadow-lg transition-all duration-200">
              <h4 className="text-[16px] md:text-lg font-bold text-heading font-heading leading-[100%] mb-6">
                {card.title}
              </h4>
              <div className="w-12 h-0.5 bg-primary mb-6 shadow-about-card" />
              <p className="text-sm text-body font-body font-normal leading-6">
                {card.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-white py-15">
      <div className="max-w-7xl mx-auto px-4">
        <Reveal>
          <SectionHeader
            subtitle={subtitle}
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
