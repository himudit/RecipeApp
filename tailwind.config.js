/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lime-green': '#A8CA22',
        'dark-gray': '#2D2D2D',
        'custom-black': '#141414',
      },
    },
  },
  plugins: [],
}

