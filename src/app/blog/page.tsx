import BlogPage from "@/features/Blog";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit Blogs | Blogs, Articles, and Many more...",
  description: "Insights on UX, UI design, development, and product strategy from Secret Spirit.",
  openGraph: {
    title: "Secretspirit Blogs | Blogs, Articles, and Many more...",
    description: "Insights on UX, UI design, development, and product strategy from Secret Spirit.",
    url: `${baseUrl}/blog`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secret Spirit Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/blog` },
};

export default function Blog() {
  return <BlogPage />;
}
