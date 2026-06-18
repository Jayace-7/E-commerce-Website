/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  theme: {
    extend: {
      keyframes: {
        'spin-in': {
          '0%':   { opacity: '0', transform: 'rotate(-180deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
      },
      animation: {
        'spin-in': 'spin-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
}

