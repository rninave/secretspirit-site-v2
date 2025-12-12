import AnimatedButton from "@/components/common/AnimatedButton";
import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import { FiArrowUpRight } from "react-icons/fi";

export default function PartOfTeam() {
    return (
        <section className="relative bg-gray-light text-body py-15 px-4">
            <Reveal>
                <SectionHeader
                    subtitle=""
                    title="Be a part of our team"
                    align="center"
                    className="mb-4"
                />
            </Reveal>

            <Reveal >
                <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10">
                    We believe in the power of human potential and the collective strength of our talented team. By providing a clear structure and training, we empower every professional to grow. Join our family and let's grow together.
                </p>
                <div className="flex justify-center">
                    <AnimatedButton
                    text="Join Our Team"
                    href="/about/careers"
                    hoverText="Join Our Team"
                    icon={<FiArrowUpRight className="text-white text-lg" />}
                    className=" cursor-pointer lg:flex bg-primary text-white px-4 py-3 rounded-full font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2"
                />
                </div>
                
            </Reveal>

        </section>
    )
}