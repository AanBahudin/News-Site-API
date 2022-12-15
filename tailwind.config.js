/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Mono', 'monospace'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'blue': '#52AEF4'
      }
    },
  },
  plugins: [],
}