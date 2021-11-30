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
        yellow: colors.amber,
        peach: '#fa9470'
      },
      gridTemplateColumns: {
        'job-slides': 'repeat(1, 200px)',
        'job-slides--md': 'repeat(1, 300px)'
      },
      gridAutoColumns: {
        'job-slides': '200px',
        'job-slides--md': '300px'
      },
      gridTemplateRows: {
        'job-slides': 'minmax(250px, 1fr)',
        'job-slides--md': 'minmax(270px, 1fr)'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
