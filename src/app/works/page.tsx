import WorksPage from "@/features/Works";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Works | Secret Spirit",
  description: "Selected works and case studies from Secret Spirit — UX, UI, and product development.",
  openGraph: {
    title: "Works | Secret Spirit",
    description: "Selected works and case studies from Secret Spirit — UX, UI, and product development.",
    url: `${baseUrl}/works`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Works",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/works` },
};

export default function Works() {
  return <WorksPage />;
}
