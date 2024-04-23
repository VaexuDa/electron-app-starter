/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/src/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
