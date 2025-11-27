import Reveal from "@/components/common/Reveal";
import SectionHeader from "@/components/common/SectionHeader";
import Image from "next/image";


interface developmentService {
    id: number;
    iconSrc: string;
    title: string;
    description: string;
}

const developmentServices: developmentService[] = [
    {
        id: 1,
        iconSrc: "/services/develop-icon-1.svg",
        title: "Responsive Web Development",
        description: "We build responsive web applications that adapt seamlessly across desktops, tablets, and mobile devices. Using the latest HTML, CSS, and JavaScript frameworks, we ensure your digital platforms are accessible, fast, and optimized for all screen sizes."
    },
    {
        id: 2,
        iconSrc: "/services/develop-icon-2.svg",
        title: "UI/UX Development",
        description: "We transform design concepts into engaging, intuitive interfaces that align with your brand identity. Leveraging modern front-end technologies, we deliver pixel-perfect, high-performance UI/UX solutions that enhance user engagement and maintainability."
    },
    {
        id: 3,
        iconSrc: "/services/develop-icon-3.svg",
        title: "Single-Page Applications (SPAs)",
        description: "For dynamic, fast-loading digital experiences, we specialize in single-page applications using frameworks like React and Angular. SPAs provide smooth transitions, real-time updates, and a native-app-like experience by eliminating page reloads."
    },
    {
        id: 4,
        iconSrc: "/services/develop-icon-4.svg",
        title: "AI-Powered Solutions",
        description: "We integrate artificial intelligence into web and mobile applications to enhance personalization, automation, and decision-making. From AI chatbots and recommendation engines to predictive analytics, our AI solutions help businesses leverage data for smarter outcomes."
    },
    {
        id: 5,
        iconSrc: "/services/develop-icon-5.svg",
        title: "Accessibility & Inclusive Design",
        description: "We create digital experiences that are accessible to all users, including those with disabilities. Following WCAG standards, we implement features such as semantic markup, keyboard navigation, alternative text, and high-contrast visuals to ensure inclusivity."
    },
    {
        id: 6,
        iconSrc: "/services/develop-icon-6.svg",
        title: "Back-End & API Integration",
        description: "Our team delivers seamless integration with back-end systems and APIs. We ensure secure data exchange, real-time updates, and smooth functionality between front-end and back-end components, whether connecting with existing infrastructure or building new APIs."
    },
    {
        id: 7,
        iconSrc: "/services/develop-icon-7.svg",
        title: "Cloud & DevOps Services",
        description: "We provide cloud-based infrastructure and DevOps solutions to improve scalability, performance, and reliability. From deployment automation to continuous monitoring, our services ensure your applications run efficiently in any environment."
    },
    {
        id: 8,
        iconSrc: "/services/develop-icon-8.svg",
        title: "Continuous Maintenance and Support",
        description: "Beyond development, we offer ongoing maintenance and support to keep your applications secure, up-to-date, and performing at their best. Our team monitors performance, applies updates, and resolves issues, allowing you to focus on your core business."
    },
];

export default function DevelopmentServicesSection() {
    return (
        <section className="bg-white pb-12 md:pb-15 pt-7  px-4 sm:px-6">
            <Reveal>
                <SectionHeader
                    subtitle=''
                    title='Comprehensive Development Services'
                    align="center"
                    className="mb-4"
                />
            </Reveal>

            <Reveal>
                <p className="text-center font-body max-w-3xl mx-auto text-body text-sm md:text-base leading-7 mb-10 ">
                    From concept to deployment, we provide end-to-end development solutions tailored to your business needs. We focus on creating seamless digital experiences that drive growth, enhance user engagement, and ensure long-term success.
                </p>
            </Reveal>

            <div className="max-w-7xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {developmentServices.map((card) => (
                        <Reveal key={card.id}>
                            <div className="h-full border border-divider p-6">
                                {/* Header with Number */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3 md:gap-4">
                                        {/* Icon */}
                                        <div className="p-2.5 rounded-full bg-development-icon-bg">
                                            <Image src={card.iconSrc} alt={card.title} width={30} height={30} />
                                        </div>
                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold font-heading text-heading">
                                            {card.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="font-body text-body text-sm md:text-base leading-6 md:leading-7">
                                    {card.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}