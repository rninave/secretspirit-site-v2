import Image from "next/image";
import {
    FiSearch,
    FiEye,
    FiTool,
    FiCheckCircle,
    FiActivity,
    FiCrosshair,
    FiLayers,
    FiShield,
    FiCode,
    FiTrendingUp,
    FiArrowUpRight,
} from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const WEBSITE = "https://www.secretuxd.com/";

const standards = [
    "WCAG 2.2 AA",
    "Nielsen’s 10 Heuristics",
    "Laws of UX",
    "ADA Web Accessibility",
];

const steps = [
    { icon: FiSearch, title: "Audit", description: "Scan a live URL, Figma file or screenshot in under a minute." },
    { icon: FiEye, title: "Understand", description: "See every issue pinned on the UI, with the rule it breaks and the evidence behind it." },
    { icon: FiTool, title: "Fix", description: "Get copy-paste CSS/HTML patches or turn findings into task tickets." },
    { icon: FiCheckCircle, title: "Test", description: "Validate fixes and confirm the UX actually improved." },
    { icon: FiActivity, title: "Monitor", description: "Re-audit every release and track your UX score over time." },
];

const features = [
    {
        icon: FiCrosshair,
        title: "Evidence-backed findings",
        description: "Every issue ships with the DOM selector, bounding box, rule reference and the reasoning behind it.",
    },
    {
        icon: FiLayers,
        title: "UX laws & heuristics engine",
        description: "A structured rules base that traces each finding back to the usability principle it violates.",
    },
    {
        icon: FiShield,
        title: "Transparent AI confidence",
        description: "Findings are labelled as measured, AI-inferred or worth a usability test — so you know what to trust.",
    },
    {
        icon: FiCode,
        title: "Copy-paste code fixes",
        description: "Engineering-ready CSS and HTML patches that developers can review and merge quickly.",
    },
    {
        icon: FiTrendingUp,
        title: "Continuous monitoring",
        description: "Track usability scores across releases and catch UX regressions before they ship.",
    },
    {
        icon: FiArrowUpRight,
        title: "Reports & integrations",
        description: "Annotated screenshots, PDF reports, design-system checks and export to Jira and Linear.",
    },
];

const audiences = [
    { title: "UX/UI designers", description: "Back redesign proposals with annotated evidence mapped to Nielsen’s heuristics and the Laws of UX." },
    { title: "Agencies & freelancers", description: "Send prospects a free UX audit before the first call." },
    { title: "Product managers", description: "Prioritise UX debt alongside features with severity and affected-page views." },
    { title: "Founders", description: "Get a shortlist of high-impact fixes before launch — no UX team required." },
    { title: "Developers", description: "Fix issues fast with exact selectors and suggested CSS, and audit staging before release." },
];

function ExternalButton({ text, variant = "solid" }: { text: string; variant?: "solid" | "outline" }) {
    const styles =
        variant === "solid"
            ? "bg-primary text-white shadow-btn hover:shadow-btn-reverse"
            : "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-btn";
    return (
        <a
            href={WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles} w-fit font-heading px-6 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 transition-colors`}
        >
            {text}
            <FiArrowUpRight size={16} />
        </a>
    );
}

export default function SecretUXDPage() {
    return (
        <>
            <ScrollProgress className="top-19" />
            <PageHero
                title="SecretUXD — AI UX/UI Audit"
                bgImage="/heros/research-hero.jpg"
                overlayColor="opacity-[0.90]"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
                breadcrumbItems={[
                    { label: "HOME", href: "/" },
                    { label: "PRODUCTS", href: "/products" },
                    { label: "SECRETUXD" },
                ]}
                subtitle="The UX intelligence platform that finds experience problems before your users do — with the evidence and the fix."
            />

            {/* Overview */}
            <Reveal className="bg-white">
                <section className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    <div className="flex-1">
                        <Image src="/brands/secretuxd-logo.svg" alt="SecretUXD logo" width={251} height={30} className="h-7 w-auto mb-6" />
                        <h2 className="text-2xl md:text-[32px] font-bold font-heading text-heading mb-4">
                            Find the UX flaws before your users do.
                        </h2>
                        <p className="text-body text-sm md:text-base leading-7 font-body mb-4">
                            SecretUXD is our AI-powered UX/UI audit platform. It uncovers UX, usability and accessibility issues
                            that could be frustrating your users — and tells you exactly how to fix them.
                        </p>
                        <p className="text-body text-sm md:text-base leading-7 font-body mb-6">
                            Built from years of hands-on UX research and audit work at Secretspirit, it combines live DOM
                            inspection, accessibility validation and visual AI analysis, so every finding comes with a selector,
                            the rule it violates, a severity score and a ready-to-use fix. Your first audit takes under 60 seconds.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <ExternalButton text="Start free audit" />
                        </div>
                    </div>
                    <div className="flex-1 w-full bg-gray-light rounded-2xl p-6 md:p-8">
                        <p className="text-primary text-xs font-heading font-bold tracking-widest uppercase mb-4">Audited against</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {standards.map((standard) => (
                                <li key={standard} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-divider">
                                    <FiCheckCircle className="text-primary shrink-0" />
                                    <span className="font-bold text-black text-sm font-body">{standard}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-body text-sm leading-6 font-body mt-6">
                            Audit live URLs, password-protected staging sites, Figma files or plain screenshots.
                        </p>
                    </div>
                </section>
            </Reveal>

            {/* How it works */}
            <Reveal className="bg-gray-light">
                <section className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <SectionHeader subtitle="How it works" title="From audit to fix in five steps" className="mb-8 md:mb-12" />
                    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {steps.map((step, index) => (
                            <li key={step.title} className="bg-white rounded-2xl border border-divider p-6 flex flex-col gap-3">
                                <div className="flex items-center justify-between">
                                    <span className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary-light text-primary">
                                        <step.icon />
                                    </span>
                                    <span className="text-xs font-heading font-bold text-body">0{index + 1}</span>
                                </div>
                                <h3 className="text-lg font-bold font-heading text-black">{step.title}</h3>
                                <p className="text-body text-sm leading-6 font-body">{step.description}</p>
                            </li>
                        ))}
                    </ol>
                </section>
            </Reveal>

            {/* Features */}
            <Reveal className="bg-white">
                <section className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <SectionHeader subtitle="Features" title="Not just a list of problems — the evidence and the fix" className="mb-8 md:mb-12" />
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title} className="rounded-2xl border border-divider p-6 hover:shadow-lg transition-shadow duration-300">
                                <span className="w-10 h-10 mb-4 inline-flex items-center justify-center rounded-full bg-primary-light text-primary">
                                    <feature.icon />
                                </span>
                                <h3 className="text-lg font-bold font-heading text-black mb-2">{feature.title}</h3>
                                <p className="text-body text-sm leading-6 font-body">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* Who it's for */}
            <Reveal className="bg-gray-light">
                <section className="py-10 md:py-20 px-4 md:px-8 max-w-7xl mx-auto">
                    <SectionHeader subtitle="Who it's for" title="Built for everyone who ships product" className="mb-8 md:mb-12" />
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                        {audiences.map((audience) => (
                            <div key={audience.title} className="bg-white rounded-2xl border border-divider p-6">
                                <h3 className="text-base font-bold font-heading text-black mb-2">{audience.title}</h3>
                                <p className="text-body text-sm leading-6 font-body">{audience.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </Reveal>

            {/* CTA */}
            <Reveal className="bg-white">
                <section className="py-10 md:py-20 px-4 md:px-8 max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
                    <h2 className="text-2xl md:text-[32px] font-bold font-heading text-heading">
                        Run your first UX audit in under 60 seconds
                    </h2>
                    <p className="text-body text-sm md:text-base leading-7 font-body max-w-2xl">
                        Start with the free plan — no credit card required. Upgrade when you need full reports,
                        regression tracking and team integrations.
                    </p>
                    <ExternalButton text="Try SecretUXD free" />
                </section>
            </Reveal>
        </>
    );
}
