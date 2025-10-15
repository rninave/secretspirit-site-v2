import CareersPage from "@/features/Careers";

export const metadata = {
  title: "Careers | Secretspirit | Explore career in design and development at Secretspirit",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Careers | Secretspirit | Explore career in design and development at Secretspirit",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: "https://secretspirit.com/about/careers",
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

export default function Careers() {
  return <CareersPage />;
}
