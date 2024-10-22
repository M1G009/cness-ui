/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "728px",
          lg: "984px",
          xl: "1240px",
          "2xl": "1432px",
        },
      },
      colors: {
        common: {
          black: "#000",
          white: "#FFF",
          current: "currentColor",
          transparent: "transparent",
        },
        mainColor: "#1A237E",
        bgGray: "#F6F6F6",
        primary: {
          main: "#1A237E",
          yellowMain: "#FFCC00",
        },
        secondary: {
          main: "#1C77C3",
          light: "#0098F4",
          dark: "#AAD9FF",
          darker: "#27097A",
          green: "#228B22",
          greenLight: "#44AF69",
        },
      },
    },
  },
  plugins: [],
};
