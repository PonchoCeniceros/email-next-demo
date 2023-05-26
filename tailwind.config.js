/** @type {import('tailwindcss').Config} */

const {
  colors,
  screens
} = require("./src/styles/theme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors,
      screens,
    },
  },
  plugins: [],
};

