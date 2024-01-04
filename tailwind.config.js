/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'space-grotesk': ['"Space Grotesk"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
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
