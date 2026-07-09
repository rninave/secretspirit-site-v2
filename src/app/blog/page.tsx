import BlogPage from "@/features/Blog";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Secretspirit Insights | Blog on UI/UX Trends, AI & Web Development",
  description: "Stay ahead of the curve with the Secretspirit blog. Read expert articles, insights, and tutorials heavily focused on innovative UI/UX design, software development, and AI automation.",
  openGraph: {
    title: "Secretspirit Insights | Blog on UI/UX Trends, AI & Web Development",
    description: "Stay ahead of the curve with the Secretspirit blog. Read expert articles, insights, and tutorials heavily focused on innovative UI/UX design, software development, and AI automation.",
    url: `${baseUrl}/blog`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Blogs",
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
