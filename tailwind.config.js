/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'alfa-slab': ['"Alfa Slab One"', 'serif'], 
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}