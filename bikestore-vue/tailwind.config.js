/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'fixed-nav-green': '#36493D',
        'primary-white': '#F1F2EA',
        'secondary-green': '#4A5043',
        'tertiary-green': '#696B32',
        'quartiary-dark': '#1F0003',
        'nav-text-green': '#557260',
        'bike-color-grey': '#546D8B',
        'unieke-services': '#d9e0d3',
        'bike-color-light-grey': '#D4D7D1',
        'bike-color-orange': '#CC5127',
        'bike-color-blue': '#394261',
        'bike-color-dark-grey': '#514A49',
        'unieke-services-green': '#9FB38E',
        'title-accent': '#B5BDB3',
        black: '#000000',
      },
      screens: {
        xl: '1360px',
      },
      fontSize: {
        xss: '0.65rem',
        h2: '1.2rem',
      },
      fontFamily: {
        sofia: ['Sofia Pro', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      visibility: ['responsive', 'group-hover', 'focus', 'hover'],
      transitionProperty: {
        transform: 'transform',
      },
      transitionDuration: {
        400: '400ms',
      },
      borderRadius: {
        '1px': '1px',
      },
      height: {
        24: '24rem',
        8: '8rem',
        40: '40rem',
        356: '356px',
        476: '476px',
        712: '712px',
        824: '824px',

        200: '200px',
        30: '30px',
        3: '3px',
        10: '39px',
      },
      width: {
        '50p': '50%',
        '54p': '54%',
        '58p': '58%',
        '70p': '70%',
        '85p': '85%',
        '90p': '90%',
        'full':'100%',
        '250p': '250px',
        '100p': '400px',

        input: '88px',
        range: '150px',
        highlightImg: '750px',
      },
      spacing: {
        min15rem: '-15rem',
        min2rem: '-2rem',
        min20rem: '-20rem',
        min5px: '-5px',
        plus20rem: '10rem',
        buttonZoek: '7px'
      },
      fontWeight: {
        'semi-bold-custom': '500',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
