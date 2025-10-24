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
          50: '#faf8f5',
          100: '#f5f1ea',
          200: '#ebe0d0',
          300: '#e0ceb5',
          400: '#c8a96a',
          500: '#c8a96a',
          600: '#b59660',
          700: '#a18356',
          800: '#8e704b',
          900: '#7a5d41',
        },
        secondary: {
          50: '#faf9f7',
          100: '#faf9f7',
          200: '#f5f3f0',
          300: '#f0ede9',
          400: '#e5e1db',
          500: '#6f6f6f',
          600: '#626262',
          700: '#555555',
          800: '#484848',
          900: '#3b3b3b',
        },
        accent: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#e8e8e8',
          300: '#d0d0d0',
          400: '#a0a0a0',
          500: '#1f1f1f',
          600: '#1c1c1c',
          700: '#191919',
          800: '#161616',
          900: '#131313',
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