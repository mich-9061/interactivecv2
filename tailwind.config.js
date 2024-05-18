/** @type {import('tailwindcss').Config} */
export default {
  content: ["./frontend/index.html", "./frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa'],
        name: ['Roboto Slab'],
        paragraph: ['Oxygen']
      }
    },
  },
  plugins: [],
}
