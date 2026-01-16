import type {Config} from 'tailwindcss'

export default {
    content: [
    './src/components/**/*.{js,jsx,ts,tsx,mdx}',
    './app/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  theme: {
  	container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1200px',
      },
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        blue: {
          100: '#5F9598',
          200: '#1D546D',
          300: '#061E29',
        },
        gray: {
          100: '#F3F4F4',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: 'calc(0.5rem - 2px)',
        sm: 'calc(0.5rem - 4px)',
      },
      fontFamily: {
        sans: ['PT Sans Caption', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-hg': ['40px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xl': ['32px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-lg': ['28px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-sm': ['20px', { lineHeight: '120%', fontWeight: '700' }],
        'heading-xs': ['16px', { lineHeight: '120%', fontWeight: '700' }],

        'body-md': ['16px', { lineHeight: '150%', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '150%', fontWeight: '400' }],
        'body-xs': ['12px', { lineHeight: '150%', fontWeight: '400' }],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config

