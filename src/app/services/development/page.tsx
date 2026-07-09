import DevelopmentPage from "@/features/Services/Development";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Custom Web & Software Development | Powered by UI/UX & AI",
  description: "Future-proof your business with Secretspirit’s development services. We build design-first, robust custom software, dynamic web applications, and intelligent AI integrations.",
  openGraph: {
    title: "Custom Web & Software Development | Powered by UI/UX & AI",
    description: "Future-proof your business with Secretspirit’s development services. We build design-first, robust custom software, dynamic web applications, and intelligent AI integrations.",
    url: `${baseUrl}/services/development`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services/development` },
};

export default function Development() {
  return <DevelopmentPage />;
}
