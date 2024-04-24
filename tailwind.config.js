/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/renderer/src/index.html', './src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          hover: 'var(--primary-hover)',
          active: 'var(--primary-active)'
        }
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
