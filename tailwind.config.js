/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#070B16',
          900: '#0C1425',
          850: '#111D35',
          800: '#192847',
          700: '#23375E',
          600: '#344E7E',
        },
        electric: {
          cyan: '#00F0FF',
          blue: '#38BDF8',
          primary: '#2563EB',
          indigo: '#4F46E5',
        },
        safety: {
          green: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Cairo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
