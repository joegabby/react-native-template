/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Add the root files
    "./app/**/*.{js,jsx,ts,tsx}", // Add the source files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
