import CareersPage from "@/features/About/Careers";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Careers at Secretspirit | Join Our UI/UX Design & Tech Team",
  description: "Looking for your next big opportunity? Join Secretspirit and work on exciting projects focusing on cutting-edge UI/UX design, modern web development, and AI integration.",
  openGraph: {
    title: "Careers at Secretspirit | Join Our UI/UX Design & Tech Team",
    description: "Looking for your next big opportunity? Join Secretspirit and work on exciting projects focusing on cutting-edge UI/UX design, modern web development, and AI integration.",
    url: `${baseUrl}/about/careers`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Careers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/about/careers` },
};

export default function Careers() {
  return <CareersPage />;
}
