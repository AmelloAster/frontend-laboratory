const { typewindTransforms } = require('typewind/transform');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    transform: typewindTransforms,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
