module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      // padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1D4E89",
        secondary: "white",
        dark: "#1D4E89",
      },
      // screens: {
      //   "2xl": "1320px",
      // },
    },
  },
  plugins: [],
};
