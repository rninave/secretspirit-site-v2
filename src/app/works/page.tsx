import WorksPage from "@/features/Works";

export const metadata = {
  title: "Works | Secretspirit | UX Research, UX/UI design, Custom Software Solutions",
  description: "Elevate your brand with Secretspirit's expert UI/UX design and development services. Our team crafts captivating digital experiences to enhance your online presence and drive business growth. Transform your vision into reality and thrive in the digital landscape with Secretspirit.",
  openGraph: {
    title: "Works | Secretspirit | UX Research, UX/UI design, Custom Software Solutions",
    description: "Elevate your brand with Secretspirit's expert UI/UX design and development services. Our team crafts captivating digital experiences to enhance your online presence and drive business growth. Transform your vision into reality and thrive in the digital landscape with Secretspirit.",
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
