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
        "stats-info": "10% 90%",
        "pokemon-profile": "15% 85%",
        "pokemon-biography": "30% 70%", 
        "pokemon-biography-infos": "10% 20% 70%",
      }
    },
  },
  plugins: [],
};
