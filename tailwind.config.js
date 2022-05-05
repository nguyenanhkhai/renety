module.exports = {
  content: [
    "./pages/***/**/*.{js,ts,jsx,tsx}",
    "./components/***/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./containers/***/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      // DEFAULT BREAKPOINTS'S MUI
      screens: {
        xs: "480px",
        sm: "600px",
        md: "900px",
        lg: "1200px",
      },
    },
    // check name color https://chir.ag/projects/name-that-color/
    colors: {
      red: "#ff0000",
      white: "#ffffff",
      steel: "#7c8491",
      "cutty-sark": "#527A7F",
    },
    fontFamily: {
      librecaslon: ["Libre Caslon Text", "serif"],
      roboto: ["Roboto", "serif"],
    },
    
  },
  plugins: [],
};
