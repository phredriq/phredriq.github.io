/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./build/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'hero' : "url ('build/img/Iskall1.png')",
      },
      fontFamily: {
        sans: [
          'sans-serif'
        ]
      }
      
    },
  },
  plugins: [],
}
