/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    distDir: 'build',
    env: {
      basePath: 'http://localhost:3000',
    },
  }
