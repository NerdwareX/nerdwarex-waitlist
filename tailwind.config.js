/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      Jost: ["Jost", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        '2xl': '1400px'
      },
    },
  },
  plugins: [],
};
