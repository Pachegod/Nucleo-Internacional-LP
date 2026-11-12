import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // O layout raiz fica em app/[lang]; URLs sem rota usam app/global-not-found.tsx.
    globalNotFound: true,
  },
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
