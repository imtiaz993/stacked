/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        "subtask-bg": "#26262699",
        "subtask-border": "#404040",
      },
      fontFamily: {
        volksansTest: ["volksansTest", "sans-serif"],
        TacticSans: ["TacticSans", "sans-serif"],
      },
      keyframes: {
        expand: {
          "0%": { maxHeight: "0", opacity: "0" },
          "100%": { maxHeight: "500px", opacity: "1" }, // Use a large max-height to accommodate dynamic content
        },
        collapse: {
          "0%": { maxHeight: "500px", opacity: "1" },
          "100%": { maxHeight: "0", opacity: "0" },
        },
        spinner: {
          from: { transform: "rotate(-360deg)" },
          to: { transform: "rotate(0deg)" },
        },
      },
      animation: {
        expand: "expand 0.3s ease-out forwards",
        collapse: "collapse 0.3s ease-in forwards",
        spinner: "spinner 1s linear infinite",
      },
    },
  },
  plugins: [],
};
