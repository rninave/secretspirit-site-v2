import CareersPage from "@/features/About/Careers";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Careers | Secret Spirit",
  description: "Join Secret Spirit — opportunities in UX, UI, and web development.",
  openGraph: {
    title: "Careers | Secret Spirit",
    description: "Join Secret Spirit — opportunities in UX, UI, and web development.",
    url: `${baseUrl}/about/careers`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Careers",
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
