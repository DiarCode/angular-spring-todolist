/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        bg_left: "#1e3c72",
        bg_right: "#2a5298",
        white: "#fbfbfd",
        black: "#202426",
        primary: "#0044ff",
      },
    },
  },
  plugins: [],
};
