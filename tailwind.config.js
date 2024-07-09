/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'custom': '2fr 1fr 1fr',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

