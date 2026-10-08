import Reveal from "@/components/common/Reveal"
import SectionHeader from "@/components/common/SectionHeader"
import { LucideIcon, ShieldCheck, Sparkles, TrendingUp } from "lucide-react"

interface LifeCard {
    title: string
    body: string
    icon: LucideIcon
}

const TopCards: LifeCard[] = [
    { title: 'Deliver Superior Experiences', body: 'Ensure fast, seamless, and delightful user interactions across every digital touchpoint.', icon: Sparkles },
    { title: 'Validate Strategy & Design', body: 'Ground every design decision in real user insights, ensuring strategies align with user needs and expectations.', icon: ShieldCheck },
    { title: 'Maximize Business Impact', body: 'Transform websites and applications into engaging, profitable products that help clients achieve their key goals.', icon: TrendingUp },
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
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white shadow-[0_12px_24px_-10px_rgba(255,61,0,0.6)]">
                                        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                                    </div>
                                    <span className="font-heading font-bold text-4xl leading-none text-primary/15" aria-hidden>
                                        {String(index + 1).padStart(2, '0')}
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