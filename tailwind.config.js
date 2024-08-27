/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "white":"#FFFFFF",
        "main-background":"#FFF7ED",
        "light-beige":"#FFEAD0",
        "gray-text":"#4D4D4D",
        "orange":"#FF8C38",
        "footer-background":"#252525",
        "footer-text":"#AAAAAA",
        "normal-text":"#161616",
        "light-orange":"#FFCC8D",
        "orange-button":"#E17654",
        "black-button":"#161616",
        "green-button":"#115E59",
        "bar-color":"#B9B9B9"
      },
    },
  },
  plugins: [],
}