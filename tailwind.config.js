const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber
      },
      gridTemplateColumns: {
        'job-slides': 'repeat(1, 300px)'
      },
      gridAutoColumns: {
        'job-slides': '300px'
      },
      gridTemplateRows: {
        'job-slides': 'minmax(340px, 1fr)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
