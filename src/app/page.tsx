import HomePage from "@/features/Home";

export const metadata = {
  title: "Secretspirit | Premium UI/UX Design, Web Development & AI Agents",
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
  openGraph: {
    title: "Secretspirit | Premium UI/UX Design, Web Development & AI Agents",
    description: "Elevate your brand with Secretspirit. As a specialized UI/UX design agency, we craft captivating digital experiences, backed by custom web development and intelligent AI Agents to drive business growth.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Secretspirit",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Secretspirit UI UX Design Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
  other: {
    "article:tag": [
      "UI UX Design",
      "Web Development",
      "Angular Development",
      "ReactJS Development",
      "NodeJS Development",
      "Startup Design Agency",
      "IT Company India",
      "IT Company Canada"
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
