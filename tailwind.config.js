/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xg' : "1080px",
        'xx' : "970px",
      },
      maxWidth: {
        'xll': '1100px',
      },
      fontFamily: {
        outfit: ['Outfit', 'Vazirmatn'],
        vazir: ['Vazirmatn']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}