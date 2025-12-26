import ServicesPage from "@/features/Services";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Services | Secretspirit | Web Development, UI & UX Design, and Custom Websites Services Company",
  description: "Services: UX research, UX/UI design, and web development from Secretspirit.",
  openGraph: {
    title: "Services | Secretspirit | Web Development, UI & UX Design, and Custom Websites Services Company",
    description: "Services: UX research, UX/UI design, and web development from Secretspirit.",
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
