/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins"],
    },
    extend: {
      colors: {
        "regal-pink": "#E4E2E3",
      },
    },
  },
  plugins: [],
};
