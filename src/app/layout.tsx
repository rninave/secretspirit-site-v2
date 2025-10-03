import type { Metadata } from "next";
import { Space_Grotesk, Bricolage_Grotesque  } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Banner from "@/components/layout/banner";
import TooltipInit from "@/components/common/tooltip";


  const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk ",
    weight: ["300", "400", "500", "600", "700"],
  });

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: "Secret Spirit",
  description: "Secret Spirit is a platform for creating and sharing secret messages.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    images: [
      {
        url: "/logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${bricolageGrotesque.variable} antialiased flex flex-col min-h-screen overflow-x-hidden bg-white`}>
        <TooltipInit />
        <Banner />
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
