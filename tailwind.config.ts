import type { Config } from 'tailwindcss';
// Tailkit (Tailwind CSS v3 Configuration)
import plugin from 'tailwindcss/plugin';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

import aspectRatio from '@tailwindcss/aspect-ratio';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        headerProfile: "url('/profile.jpg')",
        homebg: "url('/home-bg.jpg')",
      },
      colors: {
        blue: {
          '50': '#f0f5fe',
          '100': '#dee8fb',
          '200': '#c5d8f8',
          '300': '#9dbff3',
          '400': '#6e9cec',
          '500': '#4c7ae5',
          '600': '#2d55d7',
          '700': '#2e4ac7',
          '800': '#2b3ea2',
          '900': '#283880',
          '950': '#1d244e',
          light: '#dee8fb',
          DEFAULT: '#4c7ae5',
          dark: '#1d244e',
        },
        green: {
          '50': '#f1fcf8',
          '100': '#d0f7ea',
          '200': '#a1eed6',
          '300': '#6adebe',
          '400': '#37bc9b',
          '500': '#22aa8a',
          '600': '#198871',
          '700': '#186d5d',
          '800': '#18574b',
          '900': '#184940',
          '950': '#082b26',
          light: '#d0f7ea',
          DEFAULT: '#22aa8a',
          dark: '#184940',
        },
        turquoise: {
          '50': '#ecfffe',
          '100': '#d0fdfc',
          '200': '#a6fbfa',
          '300': '#69f6f7',
          '400': '#15e1e5',
          '500': '#09cbd1',
          '600': '#0aa2b0',
          '700': '#10818e',
          '800': '#166874',
          '900': '#175562',
          '950': '#093a43',
          light: '#d0fdfc',
          DEFAULT: '#09cbd1',
          dark: '#175562',
        },

        red: {
          '50': '#fef1f7',
          '100': '#fee5f0',
          '200': '#fecce3',
          '300': '#ffa2cb',
          '400': '#fe68a7',
          '500': '#f83c86',
          '600': '#e91f64',
          '700': '#ca0c47',
          '800': '#a70d3b',
          '900': '#8b1034',
          '950': '#55021a',
          light: '#fee5f0',
          DEFAULT: '#f83c86',
          dark: '#55021a',
        },
        yellow: {
          '50': '#fafcea',
          '100': '#f7fac7',
          '200': '#f1f692',
          '300': '#eff054',
          '400': '#e9e220',
          '500': '#dacb18',
          '600': '#bca112',
          '700': '#967612',
          '800': '#7c5d17',
          '900': '#6a4c19',
          '950': '#3e2a0a',
          light: '#f7fac7',
          DEFAULT: '#dacb18',
          dark: '#3e2a0a',
        },
        orange: {
          '50': '#fef7ee',
          '100': '#fcedd8',
          '200': '#f8d7b0',
          '300': '#f4b97d',
          '400': '#ee9249',
          '500': '#e97120',
          '600': '#db5c1b',
          '700': '#b64518',
          '800': '#91381b',
          '900': '#753019',
          '950': '#3f160b',
          light: '#fcedd8',
          DEFAULT: '#e97120',
          dark: '#3f160b',
        },
        gray: {
          '50': '#f7f8f8',
          '100': '#eeeef0',
          '200': '#d8dbdf',
          '300': '#b6bac3',
          '400': '#8e95a2',
          '500': '#717986',
          '600': '#5b616e',
          '700': '#4a4e5a',
          '800': '#40444c',
          '900': '#383a42',
          '950': '#17181b',
          light: '#d8dbdf',
          DEFAULT: '#17181b',
          dark: '#383a42',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      keyframes: {
        'spin-slow': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin-slow 8s linear infinite',
      },
      typography: {
        DEFAULT: {
          css: {
            body: {
              color: '#000',
            },
            a: {
              textDecoration: 'none',
              '&:hover': {
                opacity: '.75',
              },
            },
            img: {
              borderRadius: defaultTheme.borderRadius.lg,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    aspectRatio,
    forms,
    typography,
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        '.form-switch': {
          border: 'transparent',
          'background-color': colors.gray[300],
          'background-image':
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          'background-position': 'left center',
          'background-repeat': 'no-repeat',
          'background-size': 'contain !important',
          'vertical-align': 'top',
          '&:checked': {
            border: 'transparent',
            'background-color': 'currentColor',
            'background-image':
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            'background-position': 'right center',
          },
          '&:disabled, &:disabled + label': {
            opacity: '.5',
            cursor: 'not-allowed',
          },
        },
      };

      addUtilities(utilFormSwitch);
    }),
  ],
};
export default config;
