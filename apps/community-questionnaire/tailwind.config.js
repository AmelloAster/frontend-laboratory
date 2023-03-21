const config = require('ui/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: {
    ...config.content,
    files: ['./pages/**/*.{html,ts,tsx}'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
