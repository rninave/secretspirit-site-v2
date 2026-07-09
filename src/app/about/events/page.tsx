import EventsPage from "@/features/About/Events";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Life at Secretspirit | Design Culture, Tech Events & Celebrations",
  description: "Explore the vibrant culture at Secretspirit. See how our core team of passionate UI/UX designers, developers, and tech enthusiasts celebrate success and build the future together.",
  openGraph: {
    title: "Life at Secretspirit | Design Culture, Tech Events & Celebrations",
    description: "Explore the vibrant culture at Secretspirit. See how our core team of passionate UI/UX designers, developers, and tech enthusiasts celebrate success and build the future together.",
    url: `${baseUrl}/about/events`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/about/events` },
};

export default function Events() {
  return <EventsPage />;
}
