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
          "2xl": "1354px",
        },
      },
      colors: {
        common: {
          black: "#000",
          white: "#FFF",
          current: "currentColor",
          transparent: "transparent",
          bgGray: "#F6F6F6",
          lightGray: "#272727",
          sonicSliver: "#F7F7F7",
          lightGray1: "#606060",
        },
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
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xxl2": ["42px", "58px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm2": ["22px", "28px"],

        "title-sm": ["20px", "26px"],
        "title-xl": ["32px", "36px"],
        "title-xsm": ["16px", "24px"],
        "title-xsm1": ["14px", "19px"],
      },
    },
  },
  plugins: [],
};
