/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        rouge: {
          50: "#fbf4f8",
          100: "#f7ecf2",
          200: "#f1d9e8",
          300: "#e7bad3",
          400: "#d690b7",
          500: "#c76d9b",
          600: "#b2507f",
          700: "#a3426d",
          800: "#7f3555",
          900: "#6b304a",
          950: "#3f1828",
        },
        "dove-gray": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#707070",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#262626",
        },
        primary: "#05F",
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(min-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
      },
      boxShadow: {
        custom: "-1px -27px 40px 19px #d1d1d1",
      },
    },
  },
  plugins: [],
};
