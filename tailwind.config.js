module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': '"Lexend Deca", sans-serif',
      'serif': 'Merriweather, serif'

    },
    extend: {
      colors: {
        thcol: {
          ligreen: '#cff09e',
          lisea: '#a8dba8',
          dasea: '#79bd9a',
          water: '#3b8686',
          night: '#0b486b',
        },
      },
    },
  },
  plugins: [],
}
