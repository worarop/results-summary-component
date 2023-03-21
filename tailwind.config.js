/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    // fontSize: {
    //   xs: '0.7rem',
    //   sm: '0.875rem',
    //   base: '1rem',
    //   lg: '1.125rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   '3xl': '1.953rem',
    //   '4xl': '2.441rem',
    //   '5xl': '3.0rem',
    // },
    extend: {
      fontFamily:{
        comforter:['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        //Primary
        'light-red': '#FF5757',
        'orangey-yellow': '#FFB01F',
        'green-teal': '#00BD91',
        'Cobalt-blue': '#1125D4',
        //Gradient
        'light-slate': '#7857FF',
        'light-royal-blue': '#2E2BE9',

        'violet-blue': 'rgba(78, 33, 202, 1)',
        'persian-blue': 'rgba(36, 33, 202, 0)',

        //Neutral
        'pale-blue': '#EBF1FF',
        'light-lavender': '#C8C7FF',
        'dark-gray-blue': '#303B5A'
      },
    },
  },
  plugins: [],
}