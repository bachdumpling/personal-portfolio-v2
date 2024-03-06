/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        inconsolata: ["Inconsolata", "ui-sans-serif", "system-ui"],
        "marlin-soft-extra-bold": ["MarlinSoftSQ ExtraBold", "sans-serif"],
        "marlin-soft-bold": ["MarlinSoftSQ Bold", "sans-serif"],
        "marlin-soft-regular": ["MarlinSoftSQ Regular", "sans-serif"],

      },
      colors: {
        // Light Mode Colors
        "light-primary": "#c2d3b9", // Light sage green
        "light-secondary": "#e7b585", // Burnt orange
        "light-background": "#f4f1ec", // Off-white
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
