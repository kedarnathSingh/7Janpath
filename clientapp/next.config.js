/** @type {import('next').NextConfig} */
const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    distDir: 'build',
    env: {
      basePath: " process.env.BASE_PATH || 'http://localhost:3000/' " ,
      captchaSiteKey: process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY || '',
      captchaSecretKey: process.env.CAPTCHA_SECRET_KEY || ''
    },
  }
