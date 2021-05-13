module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite'
      },
      transitionDuration: {
        '0': '0ms',
        '4000': '4000ms',
      },
      transitionDelay: {
        '0': '0ms',
        '4000': '4000ms',
       }
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
    },
  },
  plugins: [],
}
