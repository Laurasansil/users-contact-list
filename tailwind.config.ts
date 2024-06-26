/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
      },
      colors: {
        "light-gray": "#f1f5f9",
        "medium-gray": "#e2e8f0",
        "darkest-gray": "#7A7E84",
        dark: "#334155",
        primary: "#1d7bd3",
        "primary-dark": "#3727AB",
      },
    },
  },
  plugins: [],
};
