/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'transparent-black': '#000c',
        'fake-black': '#0d0d0d',
        'tabasco-red': '#a6121f',
        'tabasco-red-dark': '#a6121ea1',
        'tabasco-red-light': '#a14d54',
        'birch-wood': '#d9bd8b',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
        '2xl': '1600px',
        780: '780px',
      },
    },
  },
  plugins: [],
};
