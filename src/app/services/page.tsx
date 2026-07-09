import ServicesPage from "@/features/Services";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "UI/UX Design, Custom Development & AI Services",
  description: "Explore our premium IT services. Secretspirit leads with intuitive UI/UX design, transforming digital presences alongside scalable web development and innovative AI agent solutions.",
  openGraph: {
    title: "UI/UX Design, Custom Development & AI Services",
    description: "Explore our premium IT services. Secretspirit leads with intuitive UI/UX design, transforming digital presences alongside scalable web development and innovative AI agent solutions.",
    url: `${baseUrl}/services`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services` },
};

export default function Design() {
  return <ServicesPage />;
}
