/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        "poppins-thin": 100,
        "poppins-light": 300,
        "poppins-regular": 400,
        "poppins-medium": 500,
        "poppins-semibold": 600,
        "poppins-bold": 700,
        "raleway-light": 300,
        "raleway-regular": 400,
        "raleway-semibold": 600,
        "raleway-bold": 700,
      },
    },
  },
  plugins: [],
};
