import type {Config} from 'tailwindcss'

export default {
    content: [
      './app/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "var(--container-padding)",
      screens: {
        "2xl": "var(--container-2xl)",
      },
    },
    extend: {
      colors: {
        white: "var(--color-white)",
        blue: {
          100: "var(--color-blue-100)",
          200: "var(--color-blue-200)",
          300: "var(--color-blue-300)",
        },
        gray: {
          100: "var(--color-gray-100)",
        },
        beige: {
          100: "var(--color-beige-100)",
          200: "var(--color-beige-200)",
        },
        orange: "var(--color-orange)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        "heading-hg": [
          "var(--text-heading-hg)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "heading-xl": [
          "var(--text-heading-xl)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "heading-lg": [
          "var(--text-heading-lg)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "heading-md": [
          "var(--text-heading-md)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "heading-sm": [
          "var(--text-heading-sm)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "heading-xs": [
          "var(--text-heading-xs)",
          { lineHeight: "var(--leading-heading)", fontWeight: "700" },
        ],
        "body-md": [
          "var(--text-body-md)",
          { lineHeight: "var(--leading-body)", fontWeight: "400" },
        ],
        "body-sm": [
          "var(--text-body-sm)",
          { lineHeight: "var(--leading-body)", fontWeight: "400" },
        ],
        "body-xs": [
          "var(--text-body-xs)",
          { lineHeight: "var(--leading-body)", fontWeight: "400" },
        ],
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config

