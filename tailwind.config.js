/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
      },
    },
    extend: {
      fontFamily: {
        'palanquin-dark': ['Palanquin Dark', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
