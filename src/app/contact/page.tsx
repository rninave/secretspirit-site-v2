import ContactPage from "@/features/Contact";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Contact Secretspirit | Start Your UI/UX Design & Tech Project",
  description: "Get in touch with Secretspirit today. Whether you need stunning UI/UX design, custom web development, or advanced AI agents, our experts are ready to bring your vision to life.",
  openGraph: {
    title: "Contact Secretspirit | Start Your UI/UX Design & Tech Project",
    description: "Get in touch with Secretspirit today. Whether you need stunning UI/UX design, custom web development, or advanced AI agents, our experts are ready to bring your vision to life.",
    url: `${baseUrl}/contact`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Secretspirit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function Contact() {
  return <ContactPage />;
}
