/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#1e1b1b',
        'accent': '#0054da',
        'white': 'white',
        'orange': '#ff6433',
        'steelgrey': '#e2e6e9',
        'purple': '#661ce7',
        'steel-grey': '#edf2f7',
        'mint': '#5cba99',
        'lightgrey': '#f2f2f2',
        'grey': '#687380',
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
}