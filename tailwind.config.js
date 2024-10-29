/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E1E8EF",
          100: "#D4DEE7",
          200: "#e5e7eb",
          300: "#747f64",
          400: "#657153",
          500: "#515a42",
          600: "#474f3a",
          700: "#3d4432",
          800: "#33392a",
          900: "#282d21",
          950: "#1e2219",
        },
        accent: {
          50: "#FAF5F0",
          100: "#F4ECE1",
          200: "#E8D6BF",
          300: "#DDC2A2",
          400: "#D2AF84",
          500: "#C69963",
          600: "#B78343",
          700: "#926835",
          800: "#6C4D28",
          900: "#4B351B",
          950: "#382814",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "text-shadow":
            "2px 2px 0 #382814, -2px -2px 0 #382814, -2px 2px 0 #382814, 2px -2px 0 #382814",
        },
      });
    },
  ],
};
