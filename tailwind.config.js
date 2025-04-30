/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], // adjust based on your file structure
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}

  