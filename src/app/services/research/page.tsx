import ResearchPage from "@/features/Services/Research";

export const metadata = {
  title: "Research | Secretspirit | UX Research, UX/UI design, Custom Software Solutions",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Research | Secretspirit | UX Research, UX/UI design, Custom Software Solutions",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: "https://secretspirit.com/services/Research",
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

export default function Research() {
  return <ResearchPage />;
}
