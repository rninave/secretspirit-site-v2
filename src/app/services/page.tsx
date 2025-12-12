import ServicesPage from "@/features/Services";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Services | Secret Spirit",
  description: "Services: UX research, UX/UI design, and web development from Secret Spirit.",
  openGraph: {
    title: "Services | Secret Spirit",
    description: "Services: UX research, UX/UI design, and web development from Secret Spirit.",
    url: `${baseUrl}/services`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Services",
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
