/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  env: {
    ROOT: __dirname,
  },
  assetPrefix: isProd ? '/shakogegia/' : '',
  basePath: isProd ? '/shakogegia' : '',
}

module.exports = nextConfig
