const colors = require('tailwindcss/colors');
const formPlugin = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: colors.sky,
      },
    },
  },
  plugins: [formPlugin],
};
