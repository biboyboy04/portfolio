/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}

