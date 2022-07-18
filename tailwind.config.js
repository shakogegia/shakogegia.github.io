/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
