const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {'onest' : ['Onest Variable', 'sans-serif']},
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(['solar','mdi'])
    })
  ],
}