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
                                We Produce The Best Products Out Of Scratch
                            </h2>
                        </div>

                        {/* Right content column */}
                        <div className="lg:col-span-6">
                            <div className="space-y-6 text-body text-sm md:text-base font-body font-normal leading-7 md:leading-8">
                                <p>
                                    Following a usability audit, or UX Audit is an expert report on your product's usability. User feedback, product usage analytics, and heuristic evaluation all assist us in determining what needs to be fixed.
                                </p>

                                <p>
                                    As usability experts, we assess how well your current product conforms to industry usability benchmarks. This is useful in determining which design principles and areas for improvement to emphasise in the product redesign.
                                </p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}