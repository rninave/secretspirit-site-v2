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
    // Brand
    "Secretspirit",
    "Secret Spirit",
    "SecretUXD",

    // Core Services & Agency
    "UI/UX design agency",
    "#1 UI/UX design agency",
    "Top UI/UX design agency in Nikol",
    "Top UI/UX design agency in Ahmedabad",
    "digital product design agency",
    "UI/UX design studio India",
    "UI/UX design studio Rajkot",
    "UI/UX design studio Canada",
    "UI/UX design studio Netharland",
    "UI/UX design studio Vietnam",
    "UI/UX design studio Singapore",
    "custom website development",
    "front-end development services",
    "branding and digital design",
    "UX UI solutions for startups",
    "user experience consulting",

    // UI/UX Specializations & Design
    "UI design",
    "UX design",
    "Responsive design",
    "User Interview",
    "product design",
    "design system creation",
    "interaction design",
    "prototyping and wireframing",
    "UX research",
    "responsive web design",
    "web accessibility compliance",
    "WCAG accessibility audit",
    "UX audit",
    "user-centered design",
    "user journey mapping",
    "heuristic evaluation",
    "design thinking services",
    "visual design",
    "service design",
    "usability testing services",

    // Tech Stack & Web Development
    "Next.js development company",
    "ReactJS development company",
    "Angular development company",
    "NodeJS development company",
    "web development company India",
    "web development company Canada",

    // Figma & Design to Code Conversions
    "Figma to HTML conversion",
    "Figma to React development",
    "Figma to Next.js development",
    "Figma to Angular development",
    "PSD to HTML conversion",

    // Hire Developers & Remote Staffing
    "hire UI UX designer India",
    "hire front-end developer India",
    "hire NextJS developer India",
    "hire NodeJS developer India",
    "remote development team",

    // Local & Targeted Regional SEO
    "UI UX design agency Ahmedabad",
    "best UI UX agency in Ahmedabad",
    "top design agency in Nikol Ahmedabad",
    "IT company in Ahmedabad",
    "IT company in Baroda",
    "IT company in Surat",
    "IT company in Saurastra",
    "IT company in Rajkot",
    "software development company Ahmedabad",
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
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yuwn4a4svd");
            `,
          }}
        />
      </body>
    </html>
  );
}
