/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-dark": "#030303", 
        "secondary-dark": "#141414",
        light: "#FFFFF6",
        muted: "#9D9D95",
        "muted-white": "#FFFFFF1A",
        "muted-white-border": "#FFFFFF33",
        "accent-green": "#B5FF4D",
        "disabled-gray": "#666662",
        "overlay-dark": "#00000040",
      },
      fontFamily: {
        volksansTest: ["volksansTest", "serif"],
        TacticSans: ["TacticSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
