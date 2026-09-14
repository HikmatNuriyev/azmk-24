

// export default nextConfig;
/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.azmk.az",
      },
    ],
  },
};

export default nextConfig;