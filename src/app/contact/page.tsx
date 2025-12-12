import ContactPage from "@/features/Contact";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "Contact | Secret Spirit",
  description: "Get in touch with Secret Spirit for UX, design, and development inquiries.",
  openGraph: {
    title: "Contact | Secret Spirit",
    description: "Get in touch with Secret Spirit for UX, design, and development inquiries.",
    url: `${baseUrl}/contact`,
    siteName: "Secret Spirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Contact Secret Spirit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/contact` },
};

export default function Contact() {
  return <ContactPage />;
}
