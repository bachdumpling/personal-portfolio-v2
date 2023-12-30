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
        // Light Mode Colors
        "light-primary": "#c2d3b9", // Light sage green
        "light-secondary": "#e7b585", // Burnt orange
        "light-background": "#f5f5f5", // Off-white
        "light-accent": "#75754a", // Dark olive green
        "light-text": "#4a4a4a", // Dark gray
        "light-link": "#85654a", // Terracotta
        "hover-light": "#cdb4db", // Lavender

        // Dark Mode Colors
        "dark-primary": "#354a3d", // Dark olive green
        "dark-secondary": "#85654a", // Terracotta
        "dark-background": "#1e272e", // Dark charcoal grey
        "dark-accent": "#c2d3b9", // Light sage green
        "dark-text": "#f0e9e9", // Off-white
        "dark-link": "#e7b585", // Burnt orange
        "hover-dark": "#f4a261", // Sandy orange
      },
    },
  },
  plugins: [],
};
