/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      // ...
      backgroundOpacity: ["active"],
    },
  },
};
