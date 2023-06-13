/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biru: "#1A1F5A",
        tosca: "#EEF4FA",
        hijau: "#4BB274",
        merah: "#F05252",
      },
    },
  },
  plugins: [],
};
