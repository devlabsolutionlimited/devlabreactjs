/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        spartan: ["Spartan", "sans-serif"],
      },
      colors: {
        primary: "#E74C3C",
      },
    },
  },
  plugins: [require("daisyui")],
};
