import DesignPage from "@/features/Services/Design";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit: Design | UI& UX Design Services Provider Company",
  description: "Design services from Secret Spirit — product design, systems, and UI/UX.",
  openGraph: {
    title: "Secretspirit: Design | UI& UX Design Services Provider Company",
    description: "Design services from Secret Spirit — product design, systems, and UI/UX.",
    url: `${baseUrl}/services/design`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Design",
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
