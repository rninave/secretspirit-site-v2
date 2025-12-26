import HireUsPage from "@/features/Hire-Us";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Hire skilled and experienced developers | Secretspirit",
  description: "Hire Secretspirit for UX research, UX/UI design, and web development services.",
  openGraph: {
    title: "Hire skilled and experienced developers | Secretspirit",
    description: "Hire Secretspirit for UX research, UX/UI design, and web development services.",
    url: `${baseUrl}/hire-us`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Hire Secretspirit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/hire-us` },
};

export default function HireUs() {
  return <HireUsPage />;
}
