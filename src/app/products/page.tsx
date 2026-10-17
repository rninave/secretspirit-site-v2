import ProductsPage from "@/features/Products";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Our Products | Secretspirit",
  description: "Explore the products built in-house by Secretspirit.",
  openGraph: {
    title: "Our Products | Secretspirit",
    description: "Explore the products built in-house by Secretspirit.",
    url: `${baseUrl}/products`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit Products",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/products` },
};

export default function Products() {
  return <ProductsPage />;
}
