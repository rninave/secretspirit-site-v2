import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // static export only
  // images: {
  //   unoptimized: true, // required for static hosting
  // },
  // trailingSlash: true, // avoids 404s on shared hosting
  async redirects() {
    return [
      { source: "/services", destination: "/what-we-do", permanent: true },
      { source: "/services/:path*", destination: "/what-we-do/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
