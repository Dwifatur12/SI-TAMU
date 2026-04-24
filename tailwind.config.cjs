/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // BARIS INI WAJIB ADA UNTUK VERCEL
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
