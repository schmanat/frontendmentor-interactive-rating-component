module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "grey-light": "hsl(217, 12%, 63%)",
        "grey-medium": "hsl(216, 12%, 54%)",
        "blue-light": "hsl(213, 19%, 24%)",
        "blue-dark": "hsl(213, 19%, 18%)",
        "blue-very-dark": "hsl(216, 12%, 8%)",
        primary: "hsl(25, 97%, 53%)",
      },
      fontSize: {
        normal: "15px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        overpass: "'Overpass', sans-serif",
      },
      width: {
        81: "20.375rem",
        104: "26rem",
      },
    },
  },
  plugins: [],
};
