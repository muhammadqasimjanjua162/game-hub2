/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "200px",
        sm: "400px", // Custom breakpoint for smaller screens
        mobile: "480px",
      },
    },
  },
  plugins: [],
};
