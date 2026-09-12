
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'api.azmk.az',
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       {
//         source: '/index.php',
//         destination: '/',
//         permanent: true,
//       },
//     ];
//   },
// };


// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.azmk.az',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;