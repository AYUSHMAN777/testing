/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["randomuser.me"], // <- add here
  },
  // ADD THIS experimental block
  experimental: {
    outputFileTracingIncludes: {
      '/*': [
        './node_modules/.prisma/client/libquery_engine-rhel-openssl-3.0.x.so.node',
        './node_modules/.prisma/client/schema.prisma',
      ],
    },
  },
}

export default nextConfig