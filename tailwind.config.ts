import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '0',
      screens: {
        xl: '1168px',
      },
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        dropdownMenu: `
          0px 2px 3px 0px #1F17381F,
          0px 4px 8px 0px #1F17380A,
          0px 4px 12px 0px #1F173814,
          0px 0px 1px 0px #1F17385C,
          0px 1px 1px 0px #1F173814
        `,
      },
      colors: {
        primary: '#755DC8',
        link: '#383355',
      },
      textColor: {
        default: '#1F1738',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        a: { color: theme('colors.link') },
        body: { color: theme('textColor.default') },
      })
    },
  ],
} satisfies Config
