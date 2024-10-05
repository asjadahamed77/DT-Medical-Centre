/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: '#161D6F',
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))', // Custom column setup
      },
    },
  },
  plugins: [],
}
