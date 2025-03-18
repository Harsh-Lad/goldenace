/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'sloanreview.mit.edu', 
      'media.licdn.com', 
      'rilstaticasset.akamaized.net' // Add this domain
    ],
  },
};

module.exports = nextConfig;