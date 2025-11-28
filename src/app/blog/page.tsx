import BlogPage from "@/features/Blog";

export const metadata = {
  title: "Blog | UX Research, UX & UI Design, Web Development, Custom Websites & Software Services",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Blog | UX Research, UX & UI Design, Web Development, Custom Websites & Software Services",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: "https://secretspirit.com/blog",
    siteName: "Secret Spirit",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Secret Spirit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Blog() {
  return <BlogPage />;
}
