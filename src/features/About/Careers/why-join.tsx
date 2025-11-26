import Reveal from "@/components/common/Reveal"
import SectionHeader from "@/components/common/SectionHeader"

interface LifeCard {
    title: string
    body: string
}

const LifeAtTopCards = [
    { title: 'Growth opportunities', body: 'We provide employees with the chance to advance their careers and take on new responsibilities as the company grows.' },
    { title: 'Work-life balance', body: 'We offer flexible work arrangements and other benefits to help you balance your professional and personal life.' },
    { title: 'Positive work culture', body: 'We\'ve created a work environment with a positive atmosphere that allows you to thrive.' },
    { title: 'Innovation & creativity', body: 'We give our employees the freedom and space to be innovative and creative in their work.' },
]

export default function WhyJoinSS() {
    const renderCards = (cards: LifeCard[], cols: number, maxWidth?: string) => {
        const colClass =
            cols === 1 ? 'md:grid-cols-1' :
                cols === 2 ? 'md:grid-cols-2' :
                    cols === 3 ? 'md:grid-cols-3' :
                        cols === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
                            'md:grid-cols-1'

        const maxWidthClass =
            maxWidth === '4xl' ? 'max-w-4xl mx-auto' :
                maxWidth === '5xl' ? 'max-w-5xl mx-auto' :
                    maxWidth ? `max-w-${maxWidth} mx-auto` : ''

        return (
            <div className={`grid grid-cols-1 ${colClass} gap-6 ${maxWidthClass} mb-6`}>
                {cards.map((card) => (
                    <Reveal key={card.title}>
                        <div className="bg-[#FFF6F4] rounded-xl p-6 shadow-md border h-full border-divider hover:shadow-lg transition-all duration-200">
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
                        subtitle=''
                        title='Why join Secretspirit?'
                        align="center"
                        className="mb-4"
                    />
                </Reveal>

                <Reveal>
                    <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10">
                        We believe in fostering a dynamic and supportive work environment where you can truly thrive. Joining us means becoming part of a team that values your growth, well-being, and innovative spirit.
                    </p>
                </Reveal>

                {renderCards(LifeAtTopCards, 4)}
            </div>
        </section>
    )
}