/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
      'sm':  {'min': '300px', 'max': '450px'},
    }
    }
  },
  plugins: [],
}

