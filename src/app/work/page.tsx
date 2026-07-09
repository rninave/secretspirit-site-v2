import WorksPage from "@/features/Works";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Our Portfolio | 50+ Projects in UI/UX Design, Development & AI",
  description: "Explore Secretspirit's successful projects. From stunning UI/UX transformations to complex custom web development and smart AI solutions, see how our design-first approach delivers results.",
  openGraph: {
    title: "Our Portfolio | 50+ Projects in UI/UX Design, Development & AI",
    description: "Explore Secretspirit's successful projects. From stunning UI/UX transformations to complex custom web development and smart AI solutions, see how our design-first approach delivers results.",
    url: `${baseUrl}/work`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Work",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/work` },
};

export default function Work() {
  return <WorksPage />;
}
