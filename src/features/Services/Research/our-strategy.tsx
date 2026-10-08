import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import {
    ChartLine,
    Check,
    Crosshair,
    Layers,
    LucideIcon,
    MessagesSquare,
    MousePointerClick,
} from "lucide-react";

interface ResearchPhase {
    number: string;
    phase: string;
    title: string;
    description: string;
    methods: string[];
    outcome: string;
    icon: LucideIcon;
}

const phases: ResearchPhase[] = [
    {
        number: "01",
        phase: "Plan",
        title: "Frame the Right Questions",
        description:
            "Every research project starts with alignment. We turn business goals and assumptions into testable hypotheses and focused research questions, then choose the right mix of methods, participants, and success metrics.",
        methods: ["Stakeholder interviews", "Hypothesis mapping", "Research plan"],
        outcome: "A focused research brief everyone agrees on",
        icon: Crosshair,
    },
    {
        number: "02",
        phase: "Discover",
        title: "Understand Users & Market",
        description:
            "Through generative research, we learn how people actually think, behave, and make decisions, and we study the market around them to find gaps your competitors have missed.",
        methods: ["User interviews", "Contextual inquiry", "Surveys", "Competitor benchmarking", "Analytics review"],
        outcome: "Rich qualitative and quantitative evidence",
        icon: MessagesSquare,
    },
    {
        number: "03",
        phase: "Synthesize",
        title: "Turn Data into Insights",
        description:
            "We connect patterns across interviews, surveys, and behavioral data, using AI-assisted analysis to move faster without losing nuance, and turn the findings into clear, prioritized opportunities.",
        methods: ["Affinity mapping", "Personas", "Jobs-to-be-done", "Journey mapping"],
        outcome: "Actionable insights and an opportunity map",
        icon: Layers,
    },
    {
        number: "04",
        phase: "Validate",
        title: "Test Ideas Before You Build",
        description:
            "Evaluative research puts concepts, navigation, and prototypes in front of real users early, so design decisions are backed by evidence and costly rework is avoided.",
        methods: ["Usability testing", "Card sorting", "Tree testing", "Prototype testing", "A/B testing"],
        outcome: "Validated flows and reduced product risk",
        icon: MousePointerClick,
    },
    {
        number: "05",
        phase: "Measure",
        title: "Measure, Learn & Iterate",
        description:
            "Research doesn't stop at launch. We track real-world behavior and satisfaction, measure UX KPIs, and feed the learnings back into the roadmap through continuous discovery.",
        methods: ["Product analytics", "Heatmaps", "SUS & NPS surveys", "Continuous discovery"],
        outcome: "Measurable UX improvements over time",
        icon: ChartLine,
    },
];

const principles = [
    "Qualitative and quantitative methods, combined",
    "Real users recruited from your target audience",
    "AI-assisted synthesis for faster, deeper insights",
    "Findings linked directly to design decisions",
];

export default function OurStrategySection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid gap-10 lg:grid-cols-12 lg:gap-16">
                {/* Intro */}
                <div className="lg:col-span-4">
                    <div className="lg:sticky lg:top-24">
                        <Reveal>
                            <SectionHeader
                                subtitle="Research Framework"
                                title="Our UX Research Strategy"
                                align="left"
                                className="mb-5"
                            />
                        </Reveal>

                        <Reveal delayMs={80}>
                            <p className="font-body text-body text-sm md:text-base leading-7 mb-8">
                                Great products are built on evidence, not guesswork. Our UX research strategy follows
                                five connected phases that uncover real user needs, validate ideas early, and give your
                                team the confidence to make the right product decisions, from first concept to post-launch
                                growth.
                            </p>
                        </Reveal>

                        <Reveal delayMs={160}>
                            <ul className="rounded-2xl bg-gray-light border border-border-light p-6 md:p-7 space-y-4">
                                {principles.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                                            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                                        </span>
                                        <span className="font-body text-sm md:text-base text-heading-light leading-6">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    </div>
                </div>

                {/* Timeline */}
                <ol className="lg:col-span-8 relative">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        const isLast = index === phases.length - 1;
                        return (
                            <Reveal as="li" key={phase.number} className="group relative flex gap-5 md:gap-7 pb-8 md:pb-10 last:pb-0">
                                {/* Node + connector */}
                                <div className="relative flex flex-col items-center">
                                    <div className="relative z-10 flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary bg-white text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                        <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.75} aria-hidden />
                                    </div>
                                    {!isLast && (
                                        <span
                                            className="absolute top-12 md:top-14 -bottom-8 md:-bottom-10 w-0.5 bg-gradient-to-b from-primary/60 to-primary/10"
                                            aria-hidden
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 rounded-2xl border border-border-light bg-white p-5 md:p-7 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_20px_40px_-24px_rgba(255,61,0,0.35)]">
                                    <p className="text-primary text-xs font-heading font-bold tracking-widest uppercase mb-2">
                                        Phase {phase.number} · {phase.phase}
                                    </p>
                                    <h3 className="text-lg md:text-xl font-heading font-bold text-heading mb-3">
                                        {phase.title}
                                    </h3>
                                    <p className="font-body text-body text-sm md:text-base leading-6 md:leading-7 mb-5">
                                        {phase.description}
                                    </p>

                                    <ul className="flex flex-wrap gap-2 mb-5" aria-label={`${phase.phase} research methods`}>
                                        {phase.methods.map((method) => (
                                            <li
                                                key={method}
                                                className="text-xs font-body font-medium text-heading-light bg-gray-light rounded-full px-3 py-1.5"
                                            >
                                                {method}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="flex flex-wrap items-baseline gap-x-2 border-t border-divider pt-4 font-body text-sm">
                                        <span className="text-[11px] font-heading font-bold tracking-wider uppercase text-secondry">
                                            Outcome
                                        </span>
                                        <span className="font-medium text-heading">{phase.outcome}</span>
                                    </p>
                                </div>
                            </Reveal>
                        );
                    })}
                </ol>
            </div>
        </section>
    )
}
