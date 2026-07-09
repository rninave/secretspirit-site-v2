import HireUsPage from "@/features/Hire-Us";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Hire Expert UI/UX Designers & Developers",
  description: "Augment your team with Secretspirit’s top-tier talent. Hire dedicated UI/UX design experts, custom developers, and AI integrators for your next big project.",
  openGraph: {
    title: "Hire Expert UI/UX Designers & Developers",
    description: "Augment your team with Secretspirit’s top-tier talent. Hire dedicated UI/UX design experts, custom developers, and AI integrators for your next big project.",
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
