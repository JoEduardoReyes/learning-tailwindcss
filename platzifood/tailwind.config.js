module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f3c614",
        secondary: "#353535",
      },
      height: {
        100: "25rem",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "disabled"],
    },
  },
  plugins: [],
};
