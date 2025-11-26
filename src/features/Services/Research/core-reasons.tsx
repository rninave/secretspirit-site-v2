import Reveal from "@/components/common/Reveal"
import SectionHeader from "@/components/common/SectionHeader"

interface LifeCard {
    title: string
    body: string
}

const TopCards = [
    { title: 'Deliver Superior Experiences', body: 'Ensure fast, seamless, and delightful user interactions across every digital touchpoint.' },
    { title: 'Validate Strategy & Design', body: 'Ground every design decision in real user insights, ensuring strategies align with user needs and expectations.' },
    { title: 'Maximize Business Impact', body: 'Transform websites and applications into engaging, profitable products that help clients achieve their key goals.' },
]

export default function CoreReasonsSection() {
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
                        title='Core Reasons for UX Research'
                        align="center"
                        className="mb-4"
                    />
                </Reveal>

                <Reveal>
                    <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10">
                        Our research forms the backbone of digital success—driving superior user experiences, validating design strategies, and maximizing business outcomes.
                    </p>
                </Reveal>

                {renderCards(TopCards, 3)}
            </div>
        </section>
    )
}