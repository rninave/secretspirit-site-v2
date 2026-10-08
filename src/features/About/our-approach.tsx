import React from 'react'
import Reveal from '@/components/common/Reveal'
import SectionHeader from '@/components/common/SectionHeader'
import {
  Check,
  Code2,
  LucideIcon,
  RefreshCw,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'

interface ApproachPillar {
  title: string
  body: string
  icon: LucideIcon
  className?: string
}

const featured = {
  title: 'User-Centered by Default',
  body: 'Every decision starts with real people. We use user research, personas, and usability testing to keep your product focused on the needs of the people who use it, not on assumptions.',
  icon: Users,
  points: ['UX research & user interviews', 'Personas & journey mapping', 'Usability testing on every release'],
}

const pillars: ApproachPillar[] = [
  {
    title: 'Strategy Before Pixels',
    body: 'We agree on business goals, KPIs, and product scope first, so design and development effort goes where it creates the most value.',
    icon: Target,
  },
  {
    title: 'AI-Powered, Human-Led',
    body: 'AI tools speed up research synthesis, prototyping, and QA, while experienced designers and engineers make every key decision.',
    icon: Sparkles,
  },
  {
    title: 'Design & Engineering, One Team',
    body: 'Designers and developers work together from day one, so ideas stay feasible, handoff is smooth, and the build matches the design.',
    icon: Code2,
  },
  {
    title: 'Agile & Transparent Delivery',
    body: 'Short sprints, regular demos, and shared boards mean you always know what is done, what is next, and why.',
    icon: RefreshCw,
  },
  {
    title: 'Built to Scale',
    body: 'Scalable design systems, clean code, and performance and accessibility best practices give your product a foundation that grows with your business, from MVP to enterprise.',
    icon: TrendingUp,
    className: 'md:col-span-2',
  },
]

const OurApproach: React.FC = () => {
  const FeaturedIcon = featured.icon

  return (
    <section className="bg-gray-light py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeader
            subtitle="How We Work"
            title="Our Approach"
            align="center"
            className="mb-4"
          />
        </Reveal>

        <Reveal>
          <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 md:mb-14">
            We partner with startups and growing businesses to design and build digital products people love.
            Every project combines user research, thoughtful UI/UX design, and solid engineering, backed by
            clear communication and measurable goals.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {/* Featured pillar */}
          <Reveal className="h-full md:col-span-2 lg:row-span-1">
            <div className="relative h-full overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#FF8C21_0%,#FF3D00_100%)] p-7 md:p-9 text-white">
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full border-[36px] border-white/10"
                aria-hidden
              />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm mb-8">
                <FeaturedIcon className="h-7 w-7" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="relative text-xl md:text-2xl font-heading font-bold mb-3">
                {featured.title}
              </h3>
              <p className="relative font-body text-sm md:text-base leading-6 md:leading-7 text-white/90 mb-6 max-w-xl">
                {featured.body}
              </p>
              <ul className="relative space-y-2.5">
                {featured.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 font-body text-sm md:text-base">
                    <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Supporting pillars */}
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delayMs={((index + 1) % 3) * 80} className={`h-full ${pillar.className ?? ''}`}>
                <div className="group relative h-full rounded-3xl border border-border-light bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_48px_-24px_rgba(255,61,0,0.35)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-light-primary text-primary mb-6 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-heading mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-sm md:text-base leading-6 md:leading-7 text-body">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OurApproach
