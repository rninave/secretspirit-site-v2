import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";

interface Step {
    id: number;
    number: string;
    title: string;
    description: string;
    color: string; // base color for diamond and border
}

const steps: Step[] = [
    {
        id: 1,
        number: "01",
        title: "Considering the big picture",
        description:
            "We bring an open mind, follow the design thinking process methodically, and present our findings in a polished manner. The specifics of the method — and the AI tools we lean on — are always adjusted to meet the end product's requirements.",
        color: "#f15a4a",
    },
    {
        id: 2,
        number: "02",
        title: "AI-augmented UX research",
        description:
            "When we take on a new product, we bring extensive experience across a wide range of products, industries, and end-user profiles — paired with AI-powered research tools that synthesize interviews, surveys, and behavioral data faster. We take the time to learn about every factor shaping the product so we can address the real issues at hand.",
        color: "#f39c3d",
    },
    {
        id: 3,
        number: "03",
        title: "Defining the architecture",
        description:
            "A functional product cannot exist if the architecture is not well-defined. This stage ensures that the final product meets the users' expectations by creating a solid, scalable foundation and a design system that grows with your product.",
        color: "#cddc39",
    },
    {
        id: 4,
        number: "04",
        title: "Presenting the Solution",
        description:
            "Building a solution entails paying close attention to the details and meticulously planning each process step. This stage is based on a lot of testing and iteration, using generative design tools to explore more directions in less time.",
        color: "#7cc24b",
    },
    {
        id: 5,
        number: "05",
        title: "Wireframes & AI-Assisted Prototypes",
        description:
            "Organizing content and controls on web pages and screens by assigning them different levels of prominence. AI-assisted rapid prototyping helps multiple stakeholders understand the big picture of the process flow faster, without sacrificing craft.",
        color: "#3fb0e6",
    },
    {
        id: 6,
        number: "06",
        title: "Usability Testing & Evaluation",
        description:
            "Weighing the time and cost involved in the product, early concept testing helps improve it before it ships. We combine AI-powered usability testing platforms with moderated user sessions to pinpoint exactly where to refine the design.",
        color: "#f3d23d",
    },
];

export default function TheProcess() {
    return (
        <section className="bg-gray-light py-12 md:py-15 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <SectionHeader
                        subtitle=''
                        title='The Process'
                        align="center"
                        className="mb-4"
                    />
                </Reveal>

                <Reveal>
                    <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 ">
                        Fall in love with the process and results will follow.
                    </p>
                </Reveal>

                <div className="space-y-10">
                    {steps.map((step) => (
                        <Reveal key={step.id}>
                            <div className="relative flex flex-col lg:flex-row items-start lg:items-center">
                                {/* Left: diamond + horizontal connector */}
                                <div className="flex items-center  max-lg:w-full">
                                    <div className="flex items-center flex-col lg:flex-row max-lg:w-full max-lg:justify-center">
                                        {/* Diamond */}
                                        <div className="flex items-center justify-center lg:justify-end md:w-100" >
                                            <div
                                                role="img"
                                                aria-label={`Step ${step.number}`}
                                                className="w-28 h-28 flex items-center rotate-45 justify-center"
                                                style={{ background: step.color }}
                                            >
                                                <span style={{ transform: "rotate(-45deg)" }} className="text-white font-heading font-bold text-sm md:text-base">
                                                    {step.number}
                                                </span>
                                            </div>
                                        </div>
                                        {/* <div className="w-full bg-red h-2"></div> */}

                                        {/* Connector line to box (hidden on small screens) */}
                                        <div className="w-1.5 lg:w-full" aria-hidden>
                                            <div className="h-20 w-1.5 lg:w-full lg:h-1.5" style={{ background: step.color }} />
                                        </div>
                                    </div>
                                </div>

                                {/* Right: rounded box */}
                                <div className="w-full md:flex-1">
                                    <div className="relative">
                                        <div
                                            className="rounded-3xl border-2 p-4 md:p-6 lg:p-8 bg-transparent"
                                            style={{ borderColor: step.color }}
                                        >
                                            <div className="md:grid md:grid-cols-3 md:gap-8 items-start">
                                                <div className="md:col-span-1">
                                                    <h3 className="text-xl md:text-2xl font-heading lg:text-3xl font-bold text-wrap mb-3" style={{ color: step.color }}>
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                <div className="md:col-span-2">
                                                    <p className="text-sm md:text-base font-body text-body leading-7">{step.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}