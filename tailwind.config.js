/** @type {import('tailwindcss').Config} */
const {siteColors} = require('./utils/colors');
module.exports = {
  content: [
    './components/**/*.{js, jsx, ts, tsx}',
    './pages/**/*.{js, jsx, ts, tsx}',
  ],
  theme: {
    fontFamily: {
      josefin: ['Josefin Sans', 'sans-serif'], //headings
      overpass: ['Overpass', 'sans-serif'], // sub-headings
      signika: ['Signika', 'sans-serif'], // captions, text
    },
    extend: {
      colors: siteColors,
      borderRadius: {
        16: '16px',
      },
    },
  },
  plugins: [],
};
