/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        myBlue_300: '#214177',
        myBlue_200: '#3667A6',
        myBlue_100: '#82A6CB',
        myBlue: '#BDD8F1',
      },
    },
  },
  plugins: [],
}

