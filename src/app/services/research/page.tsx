import ResearchPage from "@/features/Services/Research";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Research | Secret Spirit",
  description: "Research services from Secret Spirit — UX research and product discovery.",
  openGraph: {
    title: "Research | Secret Spirit",
    description: "Research services from Secret Spirit — UX research and product discovery.",
    url: `${baseUrl}/services/research`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services/research` },
};

export default function Research() {
  return <ResearchPage />;
}
