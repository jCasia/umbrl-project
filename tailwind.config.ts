import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        colorBlack: '#161C2D',
        colorBlue: '#473bf0',
        colorGreen: '#68D585',
        colorRed: '#F74D4D',
        colorLightBlue: '#473BF0',
        colorWhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
