import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // URLs bonitas para el Diagnóstico Rayos X (archivos estáticos en /public/rayosx).
      { source: "/rayosx", destination: "/rayosx/index.html" },
      { source: "/rayosx/admin", destination: "/rayosx/admin.html" },
    ];
  },
};

export default nextConfig;
