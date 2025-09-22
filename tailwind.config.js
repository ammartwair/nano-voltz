module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  purge: [],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        "highlight-blue": "#1e40af",
        "highlight-gold": "#b38b00",
        "text-gray": "#333333",
        "background-beige": "#f7f4e9",
      },
    },
  },
  plugins: [],
};
