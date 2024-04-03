/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        tblack: '14171A',
        secondary: '#657786',
        tertiary: '#E7ECF0'
      }
    },
  },
  plugins: [],
}