import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Imagens do mini-CMS (admin) são hospedadas no Vercel Blob.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
