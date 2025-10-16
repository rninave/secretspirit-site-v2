import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import WhyHireSS from "./why-hire";
import  HireUsCards from "./hire-us-cards";

export default function HireUsPage() {
    return (
        <>
            <PageHero
                title="Looking to Launch a Startup? Hire Us"
                bgImage="/heros/hire-us-hero.jpg"
                overlayColor="bg-[linear-gradient(123.99deg,#181616_5.78%,#330C00_45.6%,#181616_81.77%)] opacity-90"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'HIRE US' }]}
                subtitle="Looking for skilled and experienced designers or developers to join your team? Look no further. At Secretspirit, we provide top-notch development solutions tailored to your unique business needs, helping you elevate your projects to new heights."
                btn={{ label: 'Get In Touch' }}
            />
            <WhyHireSS />
            <HireUsCards />
            <TestimonialsSection />

        </>
    );
}
