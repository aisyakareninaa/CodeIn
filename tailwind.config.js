/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#DF6951",
        orange: "#F69421",
        blue: "#44AEDD",
        light: "#F3F4F9",
        dark: "#2C5282",
        bg: "#E5E5E5",
      },
      letterSpacing: {
        wider: '.06em',
      }
    },
  },
  plugins: [],
}

