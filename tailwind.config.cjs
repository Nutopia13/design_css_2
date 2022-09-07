/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**.{html,js}"],
  theme: {
      extend: {
        colors: {
        'primary': '#FFF7F0',
        'black': '#030303',
        'neutral': '#EB7565',
        'grey': '#7A746E',
        'cart1': '#755CDE',
        'cart2': '#F6A560',
        'cart3': '#F39E9E',
        'cart4': '#61C4B7',
        'cart5': '#552049',
  
       },
        fontFamily: {
        'jakarta': [ 'Plus Jakarta Sans', 'sans-serif']
       },
  
       fontSize: {
        'xs': '.875rem', // 14
        'sm': '1rem', // 16
        'base': '1.125rem', // 18
        'tiny': '1.5rem', // 24
        'xlg': '2rem', //32
        'lg': '2.25rem', //36
        '2xl': '2.5rem', //40
        '3xl': '2.75rem', //44
        '4xl': '3.5rem', //56
  
  
       },
  
    
      },
  
      screens: {
        'xs': "200px",
        'ss': "620px",
        'sm': "768px",
        'md': "1060px",
        'lg': "1200px",
        'xl': "1700px",
       },
    },
    plugins: [],
  }
  
