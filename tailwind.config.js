/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {'jetbrains':["JetBrains Mono","monospace"]},
    },
  },
  plugins: [],
}