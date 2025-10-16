/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ['Aileron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
