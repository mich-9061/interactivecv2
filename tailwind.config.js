/** @type {import('tailwindcss').Config} */
export default {
  content: ["./frontend/index.html", "./frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['Comfortaa'],
        name: ['Roboto Slab'],
        paragraph: ['Oxygen']
      },
      keyframes: {
        bounceLeft: {
          '0%,100%': { transform: 'translateX(-5px)' },
          '25%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(0px)' },
        },
      },
      animation: {
        bounceLeft: 'bounceLeft 1.5s infinite',
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        'html': { overflowY: 'scroll' },
      });
    },
],
}
// @keyframes bounce {
//   0%, 100% {
//     transform: translateY(-25%);
//     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
//   }
//   50% {
//     transform: translateY(0);
//     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
//   }
// }