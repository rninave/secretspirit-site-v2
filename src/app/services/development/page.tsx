import DevelopmentPage from "@/features/Services/Development";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit: Develop | Web Development and Custom Websites Services Provider",
  description: "Development services from Secret Spirit — web and software engineering.",
  openGraph: {
    title: "Secretspirit: Develop | Web Development and Custom Websites Services Provider",
    description: "Development services from Secret Spirit — web and software engineering.",
    url: `${baseUrl}/services/development`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/services/development` },
};

export default function Development() {
  return <DevelopmentPage />;
}
