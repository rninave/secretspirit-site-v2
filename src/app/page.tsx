import HomePage from "@/features/Home";

export const metadata = {
  title: "Secretspirit | Web Development, UI & UX Design, Custom Websites Services | India & Canada",
  description: "Welcome to Secretspirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Secretspirit | Web Development, UI & UX Design, Custom Websites Services | India & Canada",
    description: "Welcome to Secretspirit, a platform for creating and sharing secret messages.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Secretspirit",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
