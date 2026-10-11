export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040711',
          900: '#070C1A',
          850: '#0B132B',
          800: '#0F1A36',
          700: '#162347',
          600: '#1E3260',
        },
        electric: {
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
        },
        cyanAccent: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#00F0FF',
          600: '#0891B2',
        },
        violetAccent: {
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', '"Tunga"', '"Kedage"', 'sans-serif'],
        hindi: ['"Noto Sans Devanagari"', '"Mangal"', 'sans-serif'],
        tamil: ['"Noto Sans Tamil"', '"Latha"', '"Vijaya"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'radar-sweep': 'radar 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))' },
          '100%': { opacity: '0.9', filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.7))' },
        },
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
