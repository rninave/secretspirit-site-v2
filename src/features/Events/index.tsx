import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import EventsCards from "./events-card";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function EventsPage() {
    return (
        <>
        <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Experience the Secretspirit Vibe!"
                bgImage="/heros/events-hero.jpg"
                overlayColor="bg-[linear-gradient(123.99deg,#181616_5.78%,#2A2E3B_45.6%,#181616_81.77%)] opacity-90"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'ABOUT US', href: '/about' }, { label: 'EVENTS' }]}
                subtitle="Discover the heartbeat of our organization through lively functions, spirited celebrations, and engaging gatherings. From special milestones to everyday triumphs, join us in embracing the vibrant energy that defines the Secretspirit experience."
            />
            <EventsCards />
            <TestimonialsSection classname="!bg-gray-light" />

        </>
    );
}
