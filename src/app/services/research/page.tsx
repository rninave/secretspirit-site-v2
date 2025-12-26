import ResearchPage from "@/features/Services/Research";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit: Research  | UX Research, Heuristic analysis, and Usability Test Services Provider",
  description: "Research services from Secretspirit — UX research and product discovery.",
  openGraph: {
    title: "Secretspirit: Research  | UX Research, Heuristic analysis, and Usability Test Services Provider",
    description: "Research services from Secretspirit — UX research and product discovery.",
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
