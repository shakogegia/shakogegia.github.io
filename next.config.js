/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  reactStrictMode: true,
}

module.exports = nextConfig
