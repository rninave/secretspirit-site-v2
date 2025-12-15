import HomePage from "@/features/Home";

export const metadata = {
  title: "Secretspirit | Web Development, UI & UX Design, Custom Websites Services | India & Canada",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Secretspirit | Web Development, UI & UX Design, Custom Websites Services | India & Canada",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Secret Spirit",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
