import HomePage from "@/features/Home";

export const metadata = {
  title: "Secretspirit | UX Research, UX & UI Design, Web Development, Custom Websites & Software Services",
  description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
  openGraph: {
    title: "Secretspirit | UX Research, UX & UI Design, Web Development, Custom Websites & Software Services",
    description: "Welcome to Secret Spirit, a platform for creating and sharing secret messages.",
    url: "https://secretspirit.com/",
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

export default function Home() {
  return <HomePage />;
}
