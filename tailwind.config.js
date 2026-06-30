/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Aref Ruqaa', 'Amiri', 'serif'],
        body: ['var(--font-body)', 'Tajawal', 'sans-serif'],
      },
      colors: {
        ivory: '#FFF8F0',
        cream: '#F7E8D8',
        blush: '#F3D8D6',
        purple: {
          deep: '#32113F',
          royal: '#4A185D',
        },
        burgundy: '#5B2A35',
        gold: {
          DEFAULT: '#D4AF37',
          soft: '#C9A24D',
        },
      },
    },
  },
  plugins: [],
}
