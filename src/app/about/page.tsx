import AboutPage from "@/features/About";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "About | Secretspirit | Web Development, UI & UX Design, and Custom Websites Services Company",
  description: "About Secret Spirit — UX research, product design, and web development services.",
  openGraph: {
    title: "About | Secretspirit | Web Development, UI & UX Design, and Custom Websites Services Company",
    description: "About Secret Spirit — UX research, product design, and web development services.",
    url: `${baseUrl}/about`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function About() {
  return <AboutPage />;
}
