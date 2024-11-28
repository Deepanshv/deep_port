module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Tell Tailwind to purge unused styles in production
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8", // Custom color
      },
    },
  },
  plugins: [],
};
