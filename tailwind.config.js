/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B192C",
        secondary: "#FF6500",
        text: "#F8FAFC",
        textH: "#ff8533"
      }
    },
    
    plugins: [require("tailwindcss-motion")]
  }
};
