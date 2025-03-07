/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans-bengali': ['Noto Sans Bengali', 'serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

