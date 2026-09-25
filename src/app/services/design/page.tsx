import DesignPage from "@/features/Services/Design";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "AI-Powered UI/UX Design Agency | Secretspirit Design Studio",
  description: "Secretspirit blends AI-augmented workflows with human-led UX research to design interfaces that convert. From generative prototyping to usability testing, we build user-centric digital experiences for 2026 and beyond.",
  openGraph: {
    title: "AI-Powered UI/UX Design Agency | Secretspirit Design Studio",
    description: "Secretspirit blends AI-augmented workflows with human-led UX research to design interfaces that convert. From generative prototyping to usability testing, we build user-centric digital experiences for 2026 and beyond.",
    url: `${baseUrl}/services/design`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services/design` },
};

export default function Design() {
  return <DesignPage />;
}
