/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        115: "1.15",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
      gridTemplateRows: {
        "pokemon-page": "10vh 90vh"
      }
    },
  },
  plugins: [],
};
