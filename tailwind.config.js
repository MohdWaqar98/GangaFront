/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the Poppins font
      },
      backgroundImage: {
        'temple-pattern': "url('/assets/background.png')",
      },
    },
  },
  plugins: [],
}

