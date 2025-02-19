/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'min-1200': '1200px',
      },
    },
  },
  plugins: [],
}