import SecretUXDPage from "@/features/Products/SecretUXD";

const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, '');

export const metadata = {
  title: "SecretUXD | AI UX/UI Audit Platform by Secretspirit",
  description: "SecretUXD audits live URLs, Figma files and screenshots against WCAG 2.2 AA, Nielsen's heuristics and the Laws of UX — with evidence and copy-paste code fixes for every issue.",
  openGraph: {
    title: "SecretUXD | AI UX/UI Audit Platform by Secretspirit",
    description: "SecretUXD audits live URLs, Figma files and screenshots against WCAG 2.2 AA, Nielsen's heuristics and the Laws of UX — with evidence and copy-paste code fixes for every issue.",
    url: `${baseUrl}/products/secretuxd`,
    siteName: "Secretspirit",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SecretUXD - AI UX/UI Audit",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${baseUrl}/products/secretuxd` },
};

export default function SecretUXD() {
  return <SecretUXDPage />;
}
