/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#111827",
        secondary: "#e5e7eb",
      },
      screens: {
        "2xl": "1320px",
      },
      backgroundImage: {
        "hobby-lg": "url('/dist/img/other/hobby-lg.jpg')",
        "hobby-sm": "url('/dist/img/other/hobby-sm.jpg')",
      },
    },
  },
  plugins: [],
};
