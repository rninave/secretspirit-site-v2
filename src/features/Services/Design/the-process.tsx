import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import {
    Compass,
    FlaskConical,
    LucideIcon,
    Network,
    Palette,
    PenTool,
    Rocket,
    Target,
    Users,
} from "lucide-react";

interface Step {
    number: string;
    phase: string;
    title: string;
    description: string;
    deliverables: string[];
    icon: LucideIcon;
}

const steps: Step[] = [
    {
        number: "01",
        phase: "Discover",
        title: "Discovery & Alignment",
        description:
            "We start with stakeholder workshops to understand your business goals, target users, constraints, and what success looks like, so everyone agrees on the problem before any pixels are drawn.",
        deliverables: ["Project brief", "Success metrics", "Scope & roadmap"],
        icon: Compass,
    },
    {
        number: "02",
        phase: "Discover",
        title: "UX Research",
        description:
            "User interviews, surveys, competitor analysis, and a review of existing data show how people actually behave, what frustrates them, and where the real opportunities are.",
        deliverables: ["Research insights", "Competitor audit", "User pain points"],
        icon: Users,
    },
    {
        number: "03",
        phase: "Define",
        title: "Define the Problem",
        description:
            "We turn research into user personas, journey maps, and clear problem statements, then rank features by user value and business impact.",
        deliverables: ["User personas", "Journey maps", "Feature priorities"],
        icon: Target,
    },
    {
        number: "04",
        phase: "Define",
        title: "Information Architecture & User Flows",
        description:
            "We organize content and map every key task step by step, so navigation feels intuitive and the product has a structure that can grow.",
        deliverables: ["Sitemap / IA", "User flows", "Task scenarios"],
        icon: Network,
    },
    {
        number: "05",
        phase: "Design",
        title: "Wireframes & Prototypes",
        description:
            "Low-fidelity sketches and wireframes set the layout and hierarchy, then clickable prototypes let you experience the flow early and give feedback while changes are still cheap.",
        deliverables: ["Wireframes", "Clickable prototype", "Content hierarchy"],
        icon: PenTool,
    },
    {
        number: "06",
        phase: "Design",
        title: "UI Design & Design System",
        description:
            "We create high-fidelity interfaces with a clear visual language: typography, color, iconography, and reusable components that keep every screen consistent, accessible, and on brand.",
        deliverables: ["High-fidelity UI", "Design system", "Interaction states"],
        icon: Palette,
    },
    {
        number: "07",
        phase: "Validate",
        title: "Usability Testing & Iteration",
        description:
            "Real users test the prototype while we watch where they hesitate or get stuck. We refine the design based on evidence, not assumptions, and check accessibility against WCAG guidelines.",
        deliverables: ["Usability report", "Design iterations", "Accessibility check"],
        icon: FlaskConical,
    },
    {
        number: "08",
        phase: "Deliver",
        title: "Developer Handoff & Support",
        description:
            "We hand over organized Figma files, specs, and assets, and stay with your developers through build and QA, so the shipped product matches the design down to the last detail.",
        deliverables: ["Dev-ready Figma", "Specs & assets", "Design QA"],
        icon: Rocket,
    },
];

export default function TheProcess() {
    return (
        <section className="bg-gray-light py-12 md:py-15 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <SectionHeader
                        subtitle="How We Work"
                        title="Our UI/UX Design Process"
                        align="center"
                        className="mb-4"
                    />
                </Reveal>

                <Reveal>
                    <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 md:mb-14">
                        A proven, research-led process that takes your product from idea to launch-ready design,
                        with clear deliverables and your input at every stage.
                    </p>
                </Reveal>

                <ol className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <Reveal as="li" key={step.number} delayMs={(index % 4) * 80} className="h-full">
                                <div className="group relative h-full flex flex-col rounded-2xl border border-border-light bg-white p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(255,61,0,0.35)]">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-light-primary text-primary flex items-center justify-center transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                                            <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                                        </div>
                                        <span
                                            className="font-heading font-bold text-4xl leading-none text-heading/10 transition-colors duration-300 group-hover:text-primary/25"
                                            aria-hidden
                                        >
                                            {step.number}
                                        </span>
                                    </div>

                                    <p className="text-primary text-xs font-heading font-bold tracking-widest uppercase mb-2">
                                        <span className="sr-only">Step {step.number}: </span>
                                        {step.phase}
                                    </p>
                                    <h3 className="text-lg md:text-xl font-heading font-bold text-heading mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm font-body text-body leading-6 mb-6">
                                        {step.description}
                                    </p>

                                    <div className="mt-auto pt-5 border-t border-divider">
                                        <p className="text-[11px] font-heading font-bold tracking-wider uppercase text-secondry mb-3">
                                            Deliverables
                                        </p>
                                        <ul className="flex flex-wrap gap-2">
                                            {step.deliverables.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-xs font-body font-medium text-heading-light bg-gray-light rounded-full px-3 py-1.5"
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </ol>
            </div>
        </section>
    )
}
