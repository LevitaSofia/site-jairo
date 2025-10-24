import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefbf3',
          100: '#fdf5e6',
          200: '#fae8c0',
          300: '#f6d79a',
          400: '#f0b647',
          500: '#d4943f',
          600: '#b8823a',
          700: '#9c6f32',
          800: '#805d2b',
          900: '#644b23',
        },
        secondary: {
          50: '#faf8f8',
          100: '#f5f1f1',
          200: '#e6dede',
          300: '#d7cbcb',
          400: '#b9a5a5',
          500: '#9b7f7f',
          600: '#8c7272',
          700: '#755f5f',
          800: '#5e4c4c',
          900: '#4d3e3e',
        },
        accent: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f8cbd5',
          300: '#f3a8b9',
          400: '#eb6b8a',
          500: '#e1396b',
          600: '#cd1d54',
          700: '#ab1648',
          800: '#8f1544',
          900: '#7a1540',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 1s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config