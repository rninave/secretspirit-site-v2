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
    default: "Secretspirit",
    template: "%s | Secretspirit",
  },
  description: "Elevate your brand with Secretspirit's expert UI/UX design and development services. Our team crafts captivating digital experiences to enhance your online presence and drive business growth. Transform your vision into reality and thrive in the digital landscape with Secretspirit.",
  keywords: [
  "Secretspirit",
  "Secret Spirit",
  "SecretUXD",
  "UI UX design agency",
  "UI UX design company India",
  "UI UX design agency Ahmedabad",
  "UI UX design agency Nikol",
  "web development company India",
  "web development company Canada",
  "custom website development",
  "Angular development company",
  "ReactJS development company",
  "NodeJS development company",
  "front-end development services",
  "PSD to HTML conversion",
  "Figma to HTML conversion",
  "Figma to Angular development",
  "Figma to React development",
  "UX UI solutions for startups",
  "design thinking services",
  "branding and digital design",
  "hire UI UX designer India",
  "hire front-end developer India",
  "hire NodeJS developer India",
  "IT company in Ahmedabad",
  "IT company in Baroda",
  "IT company in Surat",
  "remote development team",
  "digital product design agency"
],
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
    title: "Secretspirit",
    description: "Elevate your brand with Secretspirit's expert UI/UX design and development services. Our team crafts captivating digital experiences to enhance your online presence and drive business growth. Transform your vision into reality and thrive in the digital landscape with Secretspirit.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secretspirit",
    description: "Secretspirit is a platform for creating and sharing secret messages.",
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
    "name": "Secretspirit",
    "url": siteUrl,
    "logo": `${siteUrl.replace(/\/+$/, "")}/logo.svg`,
    "sameAs": []
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": siteUrl,
    "name": "Secretspirit",
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
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-59672380"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-59672380');
          `}
        </script>

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
