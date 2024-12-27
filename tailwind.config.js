/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Custom sans-serif font
        custom: ["Rubik Vinyl", "serif"], // Example custom font
      },
    },
  },
  plugins: [],
}

