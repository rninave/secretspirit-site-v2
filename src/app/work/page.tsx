import WorksPage from "@/features/Works";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit Projects | 50+ Website and Web & Mobile Apps | Happy and Satisfied Clients",
  description: "Selected work and case studies from Secretspirit — UX, UI, and product development.",
  openGraph: {
    title: "Secretspirit Projects | 50+ Website and Web & Mobile Apps | Happy and Satisfied Clients",
    description: "Selected work and case studies from Secretspirit — UX, UI, and product development.",
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
