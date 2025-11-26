import PageHero from "@/components/common/PageHero";
import WorksSection, { WorksFilter } from "./works";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function WorksPage() {
    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Featured case studies"
                bgImage="/heros/works-hero.jpg"
                bgstyle="linear-gradient(123.99deg, rgba(0,0,0,0.97) 5.78%, rgba(34,36,47,0.97) 45.6%, rgba(0,0,0,0.97) 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'WORKS' }]}
                subtitle="We help clients worldwide build trust and achieve sustainable outcomes. We firmly believe that continuous improvement is the key driver of both growth and innovation."
            />
            <WorksFilter />
            <WorksSection />
        </>
    );
}
