/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#283674',
        customYellow: '#F6A200',
        customGreen: '#1CA242',
        customOrrange: '#E11219',
        customDimText: '#A7A7A7',
      },
    },
  },
  plugins: [],
});