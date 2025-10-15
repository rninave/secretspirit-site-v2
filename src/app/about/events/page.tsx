import EventsPage from "@/features/Events";

export const metadata = {
  title: "Happy Vibes at Secretspirit | Team Spirit and Festive Celebration",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Happy Vibes at Secretspirit | Team Spirit and Festive Celebration",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: "https://secretspirit.com/about/careers",
    siteName: "Secret Spirit",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Secret Spirit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Events() {
  return <EventsPage />;
}
