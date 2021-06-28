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
      orange: 'rgb(255, 118, 64)',
      green: 'rgb(29, 191, 115)',
      yellow: 'rgb(212, 228, 30)',
      pink: 'rgb(255, 118, 174)',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
