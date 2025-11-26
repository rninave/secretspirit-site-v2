import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import ToolUseCard from "@/components/common/ToolUseCard";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function DevelopmentPage() {
    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Building Exceptional Digital Experiences"
                bgImage="/heros/services-hero.jpg"
                overlayColor="opacity-[0.96]"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'SERVICES', href: '/services' }, { label: 'DEVELOP'}]}
                subtitle="Our visually engaging and intuitive interfaces enhance customer satisfaction, retention, and revenue. Leveraging deep UX research, the right tools, and innovative technologies, we help our clients achieve remarkable growth. Our skilled design team combines creativity with design principles to consistently deliver cutting-edge UI and UX solutions."
            />
            {/* <ToolUseCard /> */}
            <TestimonialsSection />
        </>
    )
}