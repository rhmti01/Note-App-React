/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   'outline',
  //   'outline-2',
  //   'outline-indigo-700',
  // ],
  theme: {
    extend: {
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