import Reveal from "@/components/common/Reveal"
import SectionHeader from "@/components/common/SectionHeader"
import {
    ArrowRight,
    CalendarClock,
    Globe,
    GraduationCap,
    HeartHandshake,
    LucideIcon,
    Sparkles,
    TrendingUp,
} from "lucide-react"

interface Benefit {
    title: string
    body: string
    icon: LucideIcon
}

const benefits: Benefit[] = [
    {
        title: 'Grow Your Career',
        body: 'Clear growth paths, regular feedback, and real ownership of projects help you step into bigger roles as we grow together.',
        icon: TrendingUp,
    },
    {
        title: 'Learn from Mentors',
        body: 'Work alongside experienced designers and developers who share knowledge through design critiques, code reviews, and one-on-one mentoring.',
        icon: GraduationCap,
    },
    {
        title: 'Meaningful Global Projects',
        body: 'Design and build websites, mobile apps, and SaaS products for startups and businesses around the world, across many industries.',
        icon: Globe,
    },
    {
        title: 'Modern Tools & AI Workflows',
        body: 'Work with Figma, modern frameworks, and AI-powered tools that cut out busywork and leave more time for creative problem-solving.',
        icon: Sparkles,
    },
    {
        title: 'Flexible Work-Life Balance',
        body: 'Flexible hours and respect for your personal time help you do your best work without burning out.',
        icon: CalendarClock,
    },
    {
        title: 'A Culture That Cares',
        body: 'Open communication, daily sync-ups, and a close-knit team where your ideas are heard and your well-being matters.',
        icon: HeartHandshake,
    },
]

export default function WhyJoinSS() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Intro */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-24">
                        <Reveal>
                            <SectionHeader
                                subtitle="Careers"
                                title="Why Join Secretspirit?"
                                align="left"
                                className="mb-5"
                            />
                        </Reveal>

                        <Reveal delayMs={80}>
                            <p className="font-body text-body text-sm md:text-base leading-7 mb-8">
                                Join a UI/UX design and development team where curiosity is encouraged, craft is
                                celebrated, and every person has the space to grow. Here, you'll build products
                                that people love to use, alongside colleagues who genuinely care.
                            </p>
                        </Reveal>

                        <Reveal delayMs={160}>
                            <a
                                href="#open-positions"
                                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-body font-medium text-white shadow-btn transition-shadow hover:shadow-btn-reverse"
                            >
                                View open positions
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                            </a>
                        </Reveal>
                    </div>
                </div>

                {/* Benefits */}
                <ul className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <Reveal as="li" key={benefit.title} delayMs={(index % 2) * 80} className="h-full">
                                <div className="group relative h-full overflow-hidden rounded-2xl border border-border-light bg-white p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-24px_rgba(255,61,0,0.35)]">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-light-primary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                                        </div>
                                        <h3 className="text-lg md:text-xl font-heading font-bold text-heading leading-snug">
                                            {benefit.title}
                                        </h3>
                                    </div>
                                    <p className="font-body text-body text-sm md:text-base leading-6 md:leading-7">
                                        {benefit.body}
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
                </ul>
            </div>
        </section>
    )
}
