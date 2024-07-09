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
        'customTwo': '1fr 1.5 1fr 1fr 1fr 0.5fr'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

