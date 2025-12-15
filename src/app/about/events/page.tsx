import EventsPage from "@/features/About/Events";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Happy Vibes at Secretspirit | Team Spirit and Festive Celebration",
  description: "Events and team moments at Secret Spirit — culture, meetups, and celebrations.",
  openGraph: {
    title: "Happy Vibes at Secretspirit | Team Spirit and Festive Celebration",
    description: "Events and team moments at Secret Spirit — culture, meetups, and celebrations.",
    url: `${baseUrl}/about/events`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Events",
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
