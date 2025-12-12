import type { Metadata } from "next";
import { Space_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import 'react-phone-input-2/lib/style.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/banner";
import TooltipInit from "@/components/common/tooltip";
import { PrimeReactProvider } from "primereact/api";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk ",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap', // Optimize font loading
  preload: true,
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: 'swap', // Optimize font loading
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Secret Spirit",
    template: "%s | Secret Spirit",
  },
  description: "Secret Spirit is a platform for creating and sharing secret messages.",
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.svg", sizes: "any" },
    ],
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    title: "Secret Spirit",
    description: "Secret Spirit is a platform for creating and sharing secret messages.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secret Spirit",
    description: "Secret Spirit is a platform for creating and sharing secret messages.",
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Secret Spirit",
    "url": siteUrl,
    "logo": `${siteUrl.replace(/\/+$/, "")}/logo.svg`,
    "sameAs": []
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "Secret Spirit",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl.replace(/\/+$/, "")}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/+$/, "")} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }} />
        <script
          // client-side canonical fallback for dynamic routes (improves crawlers that read DOM)
          dangerouslySetInnerHTML={{
            __html: `if(typeof window !== 'undefined'){const c=document.querySelector('link[rel=canonical]');if(c) c.setAttribute('href',location.href); else {const l=document.createElement('link');l.setAttribute('rel','canonical');l.setAttribute('href',location.href);document.head.appendChild(l);}}`,
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${bricolageGrotesque.variable} antialiased flex flex-col min-h-screen overflow-x-hidden bg-white`}>
        <TooltipInit />
        <Banner />
        <Header />
        <PrimeReactProvider value={{ hideOverlaysOnDocumentScrolling: true }}>
          <main className="flex-1 flex flex-col">{children}</main>
        </PrimeReactProvider>
        <Footer />
      </body>
    </html>
  );
}
