/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'sloanreview.mit.edu', 
      'media.licdn.com', 
      'rilstaticasset.akamaized.net', 
      'encrypted-tbn0.gstatic.com', 
      'business.cornell.edu', 
      'techwalls.com' // Add this domain
    ],
  },
};

module.exports = nextConfig;