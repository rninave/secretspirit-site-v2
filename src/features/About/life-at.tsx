import React from 'react'
import Reveal from '@/components/common/Reveal'
import SectionHeader from '@/components/common/SectionHeader'
import { LucideIcon } from 'lucide-react'

interface LifeCard {
  title: string
  body: string
  icon?: LucideIcon
}

interface LifeAtSecretspiritProps {
  subtitle?: string
  title?: string
  description?: string
  topCards: LifeCard[]
  bottomCards?: LifeCard[]
}

const LifeAtSecretspirit: React.FC<LifeAtSecretspiritProps> = ({
  subtitle = "",
  title = "Life at Secretspirit",
  description = "At Secretspirit Solutions Pvt. Ltd., we believe in building more than a team—we foster a close-knit family of professionals. Here’s how we go the extra mile to support the overall well-being of our people.",
  topCards,
  bottomCards = [],
}) => {

  const renderCards = (cards: LifeCard[], cols: number, maxWidth?: string, startIndex = 0) => {
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
        {cards.map((card, index) => {
          const Icon = card.icon
          return (
            <Reveal key={card.title} delayMs={index * 80} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border-light bg-white p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-24px_rgba(255,61,0,0.35)]">
                {/* Soft brand glow */}
                <div
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-light-primary transition-transform duration-500 group-hover:scale-125"
                  aria-hidden
                />

                <div className="relative flex items-start justify-between mb-8">
                  {Icon ? (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_12px_24px_-10px_rgba(255,61,0,0.6)]">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                    </div>
                  ) : (
                    <span />
                  )}
                  <span className="font-heading font-bold text-4xl leading-none text-primary/15" aria-hidden>
                    {String(startIndex + index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="relative text-lg md:text-xl font-bold text-heading font-heading leading-snug mb-3">
                  {card.title}
                </h3>
                <p className="relative text-sm md:text-base text-body font-body leading-6 md:leading-7">
                  {card.body}
                </p>

                {/* Accent bar: hidden by default, grows on hover */}
                <span
                  className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full"
                  aria-hidden
                />
              </div>
            </Reveal>
          )
        })}
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
          <p className="text-center font-body max-w-xs mx-auto text-body text-sm md:text-base leading-7 mb-10">
            {description}
          </p>
        </Reveal>

        {renderCards(topCards, 3)}
        {bottomCards.length > 0 && renderCards(bottomCards, 2, '4xl', topCards.length)}
      </div>
    </section>
  )
}

export default LifeAtSecretspirit
