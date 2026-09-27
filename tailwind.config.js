/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#12372A',
          deep: '#0B241C',
          dark: '#081a14',
          surface: '#153f31',
          light: '#1e5441',
        },
        earth: {
          DEFAULT: '#725422',
          gold: '#A68A58',
          light: '#C9A86A',
          muted: '#5C431B',
        },
        leaf: {
          DEFAULT: '#66845A',
          light: '#7B9B6E',
          dark: '#526C47',
        },
        charcoal: {
          DEFAULT: '#1C211E',
          muted: '#2A312D',
          border: 'rgba(28, 33, 30, 0.12)',
        },
        paper: {
          DEFAULT: '#F4F3EE',
          warm: '#FAFAF7',
          subtle: '#EDECE6',
        },
      },
      fontFamily: {
        heading: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tight-editorial': '-0.04em',
        'tighter-editorial': '-0.055em',
        'wide-tag': '0.12em',
      },
      lineHeight: {
        'editorial-tight': '0.94',
        'editorial': '1.08',
      },
      borderRadius: {
        'xs': '2px',
        'sm': '4px',
        DEFAULT: '4px',
        'md': '6px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
}
