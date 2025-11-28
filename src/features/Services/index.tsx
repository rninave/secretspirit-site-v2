import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import ServicesSection from "./services";

export default function ServicesPage() {
    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Solutions We Craft, Results You See"
                bgImage="/heros/services-hero.jpg"
                overlayColor="opacity-[0.90]"
                bgstyle="linear-gradient(123.99deg, #181616 5.78%, #131131 45.6%, #181616 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'SERVICES' }]}
                subtitle="We design and deliver bespoke digital experiences for websites and mobile applications. Our proven approach integrates AI-driven insights, the latest technologies, intuitive and engaging design, and impactful content to build strong, market-ready brands."
            />
            <ServicesSection />
            <TestimonialsSection classname="!bg-gray-light" />

        </>
    )
}