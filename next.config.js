/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'x-middleware-cache',
  //           value: 'no-cache',
  //         },
  //       ],
  //     }
  //   ]
  // }
}

module.exports = nextConfig
