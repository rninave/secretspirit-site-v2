import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";

interface ApproachItem {
    id: number;
    image: string;
    title: string;
    description: string;
}

const approachItems: ApproachItem[] = [
    {
        id: 1,
        image: "/services/our-approach-1.png",
        title: "Transform Imagination into Reality",
        description: "With your vision and our expert UX Design and Development Team, any concept can be realized. We employ tried-and-true methodologies that have a successful track record, helping us earn recognition as a leading design and development firm. We are committed to continuous improvement, ensuring we always deliver the best possible design and development services."
    },
    {
        id: 2,
        image: "/services/our-approach-2.png",
        title: "Use our Expertise to Rethink your Digital Products",
        description: "We partner with businesses globally, to create high-quality, premium software products. Our diverse and specialized skill sets are instrumental in ensuring your company's success, whether it's a new venture or an established one. Consider leveraging our in-house remote software development division for comprehensive solutions to your most complex technical challenges."
    },
    {
        id: 3,
        image: "/services/our-approach-3.png",
        title: "Personnel Enhancements (Dedicated Teams)",
        description: "We provide a dedicated team that focuses exclusively on your product and reports directly to you. This model is ideal for long-term projects with evolving requirements. We determine the appropriate team size based on project scope or specific criteria, often following moderated discussions, user reviews, or heuristic evaluations to guarantee the final product aligns perfectly with market expectations. We also offer the opportunity to hire the top Developers for a low monthly fee. We go above and beyond to prioritize end-user needs, challenging the status quo with inventive approaches. Our inventiveness is directly responsible for the uniqueness of our offerings, positioning us as one of the most innovative software industry players."
    }
];

export default function OurApproachSection() {
    return (
        <section className="bg-gray-light py-12 md:py-16 lg:py-20">
            <Reveal>
                <SectionHeader
                    subtitle=''
                    title='Our Approach & Capabilities'
                    align="center"
                    className="mb-4"
                />
            </Reveal>

            <Reveal>
                <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 md:mb-16">
                    We combine creativity, technology, and strategy to deliver digital experiences that resonate with users and drive business success.
                </p>
            </Reveal>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-12 md:space-y-16 lg:space-y-20">
                    {approachItems.map((item, index) => (
                        <Reveal key={item.id}>
                            <div className={`flex gap-6 md:gap-8 lg:gap-12 justify-between items-center flex-col ${item.id == 2 ? 'lg:flex-row-reverse': 'lg:flex-row'}`}>
                                {/* Image - Left on odd items, Right on even items */}
                                <div className={`overflow-hidden`}>
                                    <div className={`relative w-full flex ${item.id === 2 ? 'justify-end': 'justify-start'}`}>
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={500}
                                            height={333}
                                            className="object-cover min-h-80 rounded-xl"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>

                                {/* Content - Right on odd items, Left on even items */}
                                <div className={`flex flex-col justify-center flex-1`}>
                                    <h3 className="text-lg md:text-2xl font-bold heading text-heading font-heading mb-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base font-body font-normal text-body leading-7">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}