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
            "We bring an open mind, follow the design thinking process methodically, and present our findings in a polished manner. The specifics of the method are always adjusted to meet the end product's requirements.",
        color: "#f15a4a",
    },
    {
        id: 2,
        number: "02",
        title: "Extensive research",
        description:
            "When we take on a new product, we bring extensive experience across a wide range of products, industries, and end-user profiles. We take the time to learn about all the factors that affect the foundational ideas of the product so that we can effectively address the issues at hand.",
        color: "#f39c3d",
    },
    {
        id: 3,
        number: "03",
        title: "Defining the architecture",
        description:
            "A functional product cannot exist if the architecture is not well-defined. This stage ensures that the final product meets the users' expectations by creating a solid foundation.",
        color: "#cddc39",
    },
    {
        id: 4,
        number: "04",
        title: "Presenting the Solution",
        description:
            "Building a solution entails paying close attention to the details and meticulously planning each process step. This stage is based on a lot of testing and iteration.",
        color: "#7cc24b",
    },
    {
        id: 5,
        number: "05",
        title: "Wireframes & Prototypes",
        description:
            "Organizing content and controls on web pages and screens by assigning them different levels of prominence. Rapid prototyping is functional when multiple parties need to understand the big picture of the process flow.",
        color: "#3fb0e6",
    },
    {
        id: 6,
        number: "06",
        title: "Evaluations of Usability",
        description:
            "Evaluating time and money involved in the product, early concept testing can help improve it. In addition, we conduct usability tests to determine where we can improve the design process.",
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
                                        <div className="flex items-center justify-center lg:justify-end" style={{ width: 400 }}>
                                            <div
                                                role="img"
                                                aria-label={`Step ${step.number}`}
                                                className="w-28 h-28 flex items-center rotate-45 justify-center"
                                                style={{ background: step.color }}
                                            >
                                                <span style={{ transform: "rotate(-45deg)" }} className="text-white font-bold text-sm md:text-base">
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
                                                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-wrap mb-3" style={{ color: step.color }}>
                                                        {step.title}
                                                    </h3>
                                                </div>

                                                <div className="md:col-span-2">
                                                    <p className="text-sm md:text-base text-body leading-7">{step.description}</p>
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