/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#06b6d4',
        dark: '#0f172a',
        secondary: '#797986',
        neutral: '#1f1d2a',
        background: '#d1d7e0',
      },
      fontFamily: {
        Poppins: ['Poppins'],
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}

