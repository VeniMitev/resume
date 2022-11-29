/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))'
      },
      gridRow: {
        'span-7': 'span 7 / span 7'
      }
    },
  },
  plugins: [],
}
