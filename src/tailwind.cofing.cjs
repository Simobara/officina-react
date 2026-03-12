/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",

    // src classico
    "./src/**/*.{js,ts,jsx,tsx,html}",

    // le tue cartelle extra
    "./app/**/*.{js,ts,jsx,tsx,html}",
    "./START/**/*.{js,ts,jsx,tsx,html}",
    "./services/**/*.{js,ts,jsx,tsx,html}",
  ],
  // safelist non necessario se le classi sono in codice.
  // Lascialo vuoto o rimuovilo del tutto.
  safelist: [],
  theme: {
    extend: {
      spacing: {
        "9/10": "90%",
      },
      height: {
        "90vh": "90vh",
      },
      brightness: {
        35: ".35",
        40: "0.4",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar": {
          "overflow-y": "scroll",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".brightness-60": {
          filter: "brightness(60%)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
