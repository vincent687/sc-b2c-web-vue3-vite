const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Roboto"', ...defaultTheme.fontFamily.sans],
        sc: ['"Redacted Script"', 'cursive', 'sans-serif'],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        peach: '#fa9470',
      },
      gridAutoColumns: {
        'job-slides': '200px',
        'job-slides--md': '300px',
      },
      gridTemplateRows: {
        'job-slides': 'minmax(250px, 1fr)',
        'job-slides--md': 'minmax(300px, 1fr)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
