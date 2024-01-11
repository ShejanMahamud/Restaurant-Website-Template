/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        'primary': '#39DB4A',
        'black':'#272727',
        'para':'#4A4A4A'
      },
      fontFamily: {
        'Inter': ['Inter'],
      },
      width:{
        '90': '90%',
        '80': '80%'
      },
      backgroundImage: {
        'bubble-bg': "url('/images/buuble.svg')",
      }
    },
    letterSpacing: {
      'ls': '3.5px',

    },

  },
  plugins: [],
}

