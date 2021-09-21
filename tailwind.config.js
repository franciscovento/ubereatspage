module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: "#06C167",
      yellow: "#FFF2D9",
      black: "#000000",
      gray: "#F6F6F6",
      white: "#FFFFFF",
      orange: "#FA9269",
      blackHover: "#333333",
      grayHover: "#CCCCCC",
      softGray: '#EEEEEE',
      pink: "#FFD7D2",
      blue: "#0713FF"
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
       'subtitle': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       'title': '3.25rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
