import PageHero from "@/components/common/PageHero";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import GoogleMap from "./googlemap";
import ContactFormSection from "./contactform";


export default function ContactPage() {
    return (
        <>
            <ScrollProgress className="top-[76px]" />
            <PageHero
                title="Get in touch with us"
                bgImage="/heros/contact-us-bg.jpg"
                overlayColor="bg-[linear-gradient(123.99deg,#000000_5.78%,#331C07_45.6%,#000000_81.67%)] opacity-90"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'CONTACT US' }]}
                subtitle="If you need help or have question, our friendly team is here to help you."
            />
            <ContactFormSection/>
            <GoogleMap />
        </>
    );
}
