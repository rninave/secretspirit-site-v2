import Reveal from "@/components/common/Reveal";

export default function WeProduceSection() {
    return (
        <section className="py-12 md:py-15 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        {/* Left heading column */}
                        <div className="lg:col-span-6">
                            <h2 className="text-lg text-[32px] font-bold font-heading text-heading leading-tight md:leading-tight">
                                We Design Products Backed By AI-Driven UX Research
                            </h2>
                        </div>

                        {/* Right content column */}
                        <div className="lg:col-span-6">
                            <div className="space-y-6 text-body text-sm md:text-base font-body font-normal leading-7 md:leading-8">
                                <p>
                                    Every engagement starts with a UX audit — an expert, data-backed report on your product's usability. We combine AI-powered analytics, real user feedback, and heuristic evaluation to pinpoint exactly what's holding your experience back.
                                </p>

                                <p>
                                    As UX research and design specialists, we benchmark your current product against modern usability and accessibility standards, then use AI-assisted tools alongside human judgment to prioritize the design principles and improvements that move the needle most in your redesign.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}