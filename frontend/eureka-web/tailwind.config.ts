/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        kingfink: ['Kingfink', 'sans-serif'],
        'drabina-outline': ['drabina-outline', 'sans-serif'],
        'drabina-solid': ['drabina-solid', 'sans-serif'],
      },
      maxWidth: {
        content: '720px',
        accordion: '1080px',
      },
      fontSize: {
        body: ['18px', '24px'],
      },
    },
  },
  plugins: [],
};
