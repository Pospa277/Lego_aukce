import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Povolíme externí obrázky z různých domén (pro mock data s obrázky)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
