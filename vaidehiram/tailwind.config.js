/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0f0d14',
          900: '#17131f',
          800: '#221c30',
          700: '#342b48',
          500: '#6b637c',
          400: '#9d96ab',
        },
        cream: '#fffaf5',
        blush: {
          50: '#fff8fa',
          100: '#ffeff3',
          200: '#ffd6e1',
          300: '#ffb3c7',
        },
        rose: {
          soft: '#fff0f4',
          DEFAULT: '#e889a4',
          deep: '#b84d6f',
          dark: '#8f3655',
        },
        sage: {
          soft: '#ecf5ee',
          muted: '#d4e8d8',
          DEFAULT: '#6fa97a',
          deep: '#3d7a4a',
        },
        mint: '#d8f3e7',
        /** Playful “crayon” palette — childminding / nursery energy */
        sunshine: '#ffd23f',
        babySky: '#7ec8ff',
        crayonCoral: '#ff8a5c',
        crayonLilac: '#d4c4ff',
        crayonGrass: '#8fd694',
        crayonPink: '#ff8fab',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'ui-serif', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 4px 6px -1px rgba(15, 13, 20, 0.06), 0 2px 4px -2px rgba(15, 13, 20, 0.04)',
        card: '0 20px 50px -24px rgba(23, 19, 31, 0.28)',
        glow: '0 0 80px -20px rgba(255, 138, 92, 0.5)',
        playful: '0 12px 0 0 rgba(23, 19, 31, 0.06)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
