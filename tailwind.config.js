/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('./src/assets/herobg.png')",
        herom: "url('./src/assets/herobgmobile.png')",
        'bg-sec2': "url('./src/assets/sec2-bg.png')",
      },
      fontFamily: {
        gemunu: ['GemunuLibre', 'cursive'],
      },
    },
  },
  plugins: [],
};
