import DesignPage from "@/features/Services/Design";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Top UI/UX Design Agency | Expert Digital Experiences",
  description: "Engage users with Secretspirit’s core expertise: premium UI/UX design. We craft captivating, user-centric interfaces and seamless digital experiences that drive engagement and conversions.",
  openGraph: {
    title: "Top UI/UX Design Agency | Expert Digital Experiences",
    description: "Engage users with Secretspirit’s core expertise: premium UI/UX design. We craft captivating, user-centric interfaces and seamless digital experiences that drive engagement and conversions.",
    url: `${baseUrl}/services/design`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services/design` },
};

export default function Design() {
  return <DesignPage />;
}
