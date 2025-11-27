import PageHero from "@/components/common/PageHero";
import TestimonialsSection from "@/components/common/Testimonials";
import ToolUseCard from "@/components/common/ToolUseCard";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import DevelopmentServicesSection from "./development-services";
import DevelopmentCapabilities from "./development-capabilities";
import HowWeHelpSection from "./how-we-help";

const toolList = [
    {id: 1, src: '/toolcard/angular-icon.png', alt: 'angular icon'},
    {id: 2, src: '/toolcard/typescript-icon.png', alt: 'typescript icon'},
    {id: 3, src: '/toolcard/sass-icon.png', alt: 'sass icon'},
    {id: 4, src: '/toolcard/npm-icon.png', alt: 'npm icon'},
    {id: 5, src: '/toolcard/git-icon.png', alt: 'git icon'},
    {id: 6, src: '/toolcard/vs-code-icon.png', alt: 'vs code icon'},
    {id: 7, src: '/toolcard/node-icon.png', alt: 'node icon'},
    {id: 8, src: '/toolcard/html-icon.png', alt: 'html icon'},
    {id: 9, src: '/toolcard/css-icon.png', alt: 'css icon'},
    {id: 10, src: '/toolcard/ant-design-icon.png', alt: 'ant-design icon'},
    {id: 11, src: '/toolcard/bootstrap-icon.png', alt: 'bootstrap icon'},
    {id: 12, src: '/toolcard/javascript-icon.png', alt: 'javascript icon'},
]

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
            <ToolUseCard tools={toolList} />
            <DevelopmentServicesSection />
            <HowWeHelpSection />
            <DevelopmentCapabilities />
            <TestimonialsSection />
        </>
    )
}