import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      screens: {
        xl: '1200px',
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)'],
      poppins: ['var(--font-poppins)'],
    },
    extend: {
      colors: {
        'cs-green': '#00C696',
        'cs-yellow': '#FBFF23',
        'cs-blue': '#4A77FF',
        'cs-light-blue': '#8BC4FF',
        'cs-dark': '#343741',
        'cs-slate': '#344054',
        'cs-light-slate': '#24252F',
        'cs-grey': '#5E626F',
        'cs-fog': '#FBFBFB',
      },
      backgroundImage: {
        'cs-gradient': 'linear-gradient(151.17deg, #26C2B9 8.69%, #288BE7 126.06%)',
      },
    },
  },
  plugins: [],
};
export default config;
