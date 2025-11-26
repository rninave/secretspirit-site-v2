import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

interface StrategyCard {
    id: number;
    iconSrc: string;
    number: string;
    title: string;
    description: string;
}

const strategyCards: StrategyCard[] = [
    {
        id: 1,
        iconSrc: "/services/our-strategy-1.svg",
        number: "01",
        title: "Identify & Innovate",
        description: "At Secretspirit, we first diagnose core problems and then generate high-impact, innovative solutions."
    },
    {
        id: 2,
        iconSrc: "/services/our-strategy-2.svg",
        number: "02",
        title: "Prototype & Test Rapidly",
        description: "By minimizing time spent on prototyping, we can quickly test the viability of new concepts, features, and technologies."
    },
    {
        id: 3,
        iconSrc: "/services/our-strategy-3.svg",
        number: "03",
        title: "Assess & Mitigate Risks",
        description: "This step involves methodically identifying potential roadblocks and user anxieties, and developing strategies to effectively handle them."
    },
    {
        id: 4,
        iconSrc: "/services/our-strategy-4.svg",
        number: "04",
        title: "Validate Solutions",
        description: "We leverage deep customer knowledge and insights to accurately identify problems and develop long-term, commercially viable solutions."
    }
];

export default function OurStrategySection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <Reveal>
                <SectionHeader
                    subtitle=''
                    title='Our Strategy'
                    align="center"
                    className="mb-4"
                />
            </Reveal>

            <Reveal>
                <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 md:mb-16">
                    The entire procedure can be broadly classified into four simple yet, critical steps:
                </p>
            </Reveal>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {strategyCards.map((card) => (
                        <Reveal key={card.id}>
                            <div className="h-full border border-divider py-[32px] px-6">
                                {/* Header with Number */}
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        {/* Icon */}
                                        <Image src={card.iconSrc} alt={card.title} width={40} height={40} />
                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold font-heading text-heading">
                                            {card.title}
                                        </h3>
                                    </div>
                                    {/* Number Badge */}
                                    <span className="text-4xl md:text-5xl lg:text-[65px] font-extrabold text-primary-light-text font-heading flex-shrink-0">
                                        {card.number}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="font-body text-body text-sm md:text-base leading-6 md:leading-7">
                                    {card.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}