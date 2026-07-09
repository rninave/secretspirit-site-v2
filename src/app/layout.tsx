import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css";
import 'react-phone-input-2/lib/style.css';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/banner";
import TooltipInit from "@/components/common/tooltip";
import { PrimeReactProvider } from "primereact/api";
import { Analytics } from "@vercel/analytics/next";


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
    default: "Secretspirit | Premium UI/UX Design, Web Development & AI Integrated",
    template: "%s | Secretspirit",
  },
  description: "Elevate your brand with Secretspirit. As a specialized UI/UX design agency, we craft captivating digital experiences, backed by custom web development and intelligent AI Agents to drive business growth.",
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
    "NextJS development company",
    "Next.js development company",
    "front-end development services",
    "PSD to HTML conversion",
    "Figma to HTML conversion",
    "Figma to Angular development",
    "Figma to React development",
    "Figma to Next.js development",
    "UX UI solutions for startups",
    "design thinking services",
    "branding and digital design",
    "hire UI UX designer India",
    "hire front-end developer India",
    "hire NodeJS developer India",
    "hire NextJS developer India",
    "IT company in Ahmedabad",
    "IT company in Baroda",
    "IT company in Surat",
    "remote development team",
    "digital product design agency",
    "best design agency in nikol",
    "best design studio in ahmedabad",
    "UI UX design studio India",
    "UX Design",
    "UI Design",
    "Product Design",
    "Design System",
    "Interaction Design",
    "Prototyping",
    "UX Research",
    "Responsive Design",
    "Web Accessibility",
    "UX Audit",
    "User-Centered Design",
    "User Journey Mapping",
    "Heuristic Evaluation",
    "Design Thinking",
    "Wireframing",
    "Visual Design",
    "Service Design",
    "Information Design",
    "Usability Testing",
    "user experience consulting",
    "web accessibility compliance",
    "wcag accessibility audit",
    "usability testing services",
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
    locale: "en_US",
    siteName: "Secretspirit",
    title: "Secretspirit | Premium UI/UX Design, Web Development & AI Agents",
    description: "Elevate your brand with Secretspirit. As a specialized UI/UX design agency, we craft captivating digital experiences, backed by custom web development and intelligent AI Agents to drive business growth.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Secretspirit - Expert UI/UX Design & Development Services",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secretspirit | Premium UI/UX Design, Web Development & AI Agents",
    description: "Elevate your brand with Secretspirit. As a specialized UI/UX design agency, we craft captivating digital experiences, backed by custom web development and intelligent AI Agents to drive business growth.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: '/',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="keywords" content={Array.isArray(metadata.keywords) ? metadata.keywords.join(', ') : (metadata.keywords || '')} />
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
        <Analytics />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2YQGE986PG"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2YQGE986PG');
            `,
          }}
        />
      </body>
    </html>
  );
}
