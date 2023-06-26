const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen1: "#1DE429",
        customGreen2: "#319d0f",
        customGreen3: "#104604",
        customGreen4: "#246510",
        customBlack: "#111111",
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
        comfortaa: ["Comfortaa", "cursive"],
        roboto: ["Roboto", "sans-serif"],
        flowCircular: ['Flow Circular', "cursive"],
        frankRuhlLibre: ['Frank Ruhl Libre', "serif"]
      },
    },
  },
  plugins: [],
};
