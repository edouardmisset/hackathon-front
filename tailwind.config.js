module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: 'hsl(0, 0%, 5%)',
      white: 'hsl(0, 0%, 95%)',
      gray: 'hsl(0, 0%, 55%)',
      orange: {
        light: 'rgb(255, 224, 212)',
        medium: 'rgb(143, 41, 0)',
        DEFAULT: 'rgb(255, 118, 64)',
        dark: 'rgb(66, 19, 0)',
      },
      green: {
        light: 'rgb(208, 247, 230)',
        medium: 'rgb(0, 115, 46)',
        DEFAULT: 'rgb(29, 191, 115)',
        dark: 'rgb(0, 57, 18)',
      },
      yellow: {
        light: 'rgb(241, 244, 203)',
        medium: 'rgb(104, 114, 0)',
        DEFAULT: 'rgb(212, 228, 30)',
        dark: 'rgb(37, 66, 0)',
      },
      pink: {
        DEFAULT: 'rgb(255, 118, 174)',
        light: 'rgb(255, 211, 174)',
        medium: 'rgb(190, 82, 114)',
        dark: 'rgb(77, 23, 39)',
      },
    },
  },
  fill: {
    green: {
      light: 'rgb(208, 247, 230)',
      medium: 'rgb(0, 115, 46)',
      DEFAULT: 'rgb(29, 191, 115)',
      dark: 'rgb(0, 57, 18)',
    },
  },
  extend: {},
  variants: {
    extend: {},
  },
  plugins: [],
};
