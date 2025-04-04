/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        glow: 'var(--glow-color)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
    },
  },
  plugins: [],
};