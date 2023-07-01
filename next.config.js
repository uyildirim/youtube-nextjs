/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains:[],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.pexels.com',
          },
          {
            protocol: 'https',
            hostname: 'loremflickr.com',
          },
          {
            protocol: 'https',
            hostname: 'picsum.photos',
          },
          {
            protocol: 'https',
            hostname: 'cloudflare-ipfs.com',
          },
        ],
      },
}

module.exports = nextConfig
