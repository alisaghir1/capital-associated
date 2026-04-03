/** @type {import('next').NextConfig} */
const nextConfig = {
  // Increase body size limit for API routes (handles large base64 image uploads)
  serverActions: {
    bodySizeLimit: '50mb',
  },
  async redirects() {
    return [
      {
        source: '/our-work/Tilal-Al-Ghaf-Interior',
        destination: '/our-work/tilal-al-ghaf-interior-luxury-residential-fitout',
        permanent: true,
      },
      {
        source: '/our-work/Landscape-and-Exterior-Construction-Dubai',
        destination: '/our-work/landscape-exterior-construction-dubai-premium-outdoor-development',
        permanent: true,
      },
      {
        source: '/our-work/meatmoot-khawaneej',
        destination: '/our-work/meatmoot-al-khawaneej-commercial-restaurant-development',
        permanent: true,
      },
      {
        source: '/our-work/elite-villa-construction',
        destination: '/our-work/elite-villa-construction-dubai-hills-luxury-development',
        permanent: true,
      },
      {
        source: '/our-work/Tilal-Al-Ghaf-Landscape',
        destination: '/our-work/tilal-al-ghaf-landscape-luxury-outdoor-living-construction',
        permanent: true,
      },
      {
        source: '/our-work/Jumeirah-villa-construction',
        destination: '/our-work/jumeirah-villa-construction-prestigious-residential-development',
        permanent: true,
      },
      {
        source: '/our-work/meatmoot-jbr',
        destination: '/our-work/meatmoot-jbr-beachfront-restaurant-construction-excellence',
        permanent: true,
      },
      {
        source: '/our-work/meatmoot',
        destination: '/our-work/meatmoot-city-walk-restaurant-construction',
        permanent: true,
      },
      {
        source: '/contact-us\\)',
        destination: '/contact-us',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vxhftpfqzrxulcdrzmyc.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
        port: '',
        pathname: '/api/**',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
