import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/MyPortfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/MyPortfolio/" : "",
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
