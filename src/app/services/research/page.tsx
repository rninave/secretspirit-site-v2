import ResearchPage from "@/features/Services/Research";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "UX Research & Usability Testing | Design-Driven Insights",
  description: "Make informed decisions with our in-depth UX research and heuristic analysis. Secretspirit uncovers user behaviors to optimize your digital products, setting the foundation for great UI/UX.",
  openGraph: {
    title: "UX Research & Usability Testing | Design-Driven Insights",
    description: "Make informed decisions with our in-depth UX research and heuristic analysis. Secretspirit uncovers user behaviors to optimize your digital products, setting the foundation for great UI/UX.",
    url: `${baseUrl}/services/research`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Research",
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
