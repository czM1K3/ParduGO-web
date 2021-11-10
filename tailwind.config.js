module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pardubice: {
          default: '#B70106',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
