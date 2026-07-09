import WorksPage from "@/features/Works";

export const metadata = {
  title: "Our Portfolio | 50+ Projects in UI/UX Design, Development & AI",
  description: "Explore Secretspirit's successful projects. From stunning UI/UX transformations to complex custom web development and smart AI solutions, see how our design-first approach delivers results.",
  openGraph: {
    title: "Our Portfolio | 50+ Projects in UI/UX Design, Development & AI",
    description: "Explore Secretspirit's successful projects. From stunning UI/UX transformations to complex custom web development and smart AI solutions, see how our design-first approach delivers results.",
    url: "https://secretspirit.com/hire-us",
    siteName: "Secretspirit",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Secretspirit Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Works() {
  return <WorksPage />;
}
