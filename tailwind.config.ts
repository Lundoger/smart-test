import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)',
      },
      colors: {
        bgPrimary: 'var(--bg-primary)',
        bgSecondary: 'var(--bg-secondary)',
        textPrimary: 'var(--text-primary)',
        textDark: 'var(--text-dark)',
      },
      screens: {
        xs: '380px',
        sm: '420px',
        md: '768px',
        ml: '1024px',
        lg: '1280px',
        xl: '1440px',
        '2xl': '1920px',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

export default config;
