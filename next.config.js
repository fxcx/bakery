/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'fake-api-bay.vercel.app'],
    remotePatterns:[
      {
        protocol: 'https',
        port: '',
        hostname: 'fake-api-bay.vercel.app',
        pathname: '/console/**'
      }
      
    ]
  }
}

module.exports = nextConfig
