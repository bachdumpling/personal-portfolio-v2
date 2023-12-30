/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' if you want to use the media-query strategy
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "ui-sans-serif", "system-ui"],
      },
      colors: {
        primary: "#005f73",
        secondary: "#0a9396",
        background: "#fff",
        foreground: "#3d405b",
        accent: "#ca6702",
        error: "#d62828",
        dark: {
          background: "#22223b",
          foreground: "#edf2f4",
          accent: "#f4a261",
        },
      },
    },
  },
  plugins: [],
};
