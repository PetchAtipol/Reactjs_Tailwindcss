/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}",
            "./src/component/*.{js,jsx,tsx,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      bubblegum: "#ff77e9",
      bermuda: "#78dcca",
      goodgreen: "#4CAF4F",
      bestgreen: "#006b20",
      secondary: "#263238",
      D_gray: "#4D4D4D",
      silver: "#F5F7FA",
      D_black: "#263238",
    },
    extend: {},
  },
  plugins: [],
};
