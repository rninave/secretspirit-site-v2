import AboutPage from "@/features/About";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "About Secretspirit | Leading UI/UX Design & IT Services Agency",
  description: "Discover the team behind Secretspirit. We are a design-first IT service company passionate about delivering exceptional UI/UX, software development, and innovative AI solutions.",
  openGraph: {
    title: "About Secretspirit | Leading UI/UX Design & IT Services Agency",
    description: "Discover the team behind Secretspirit. We are a design-first IT service company passionate about delivering exceptional UI/UX, software development, and innovative AI solutions.",
    url: `${baseUrl}/about`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit About",
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
