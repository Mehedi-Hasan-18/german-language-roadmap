/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#EDE9DE',
        panel: '#F8F5EC',
        panelDark: '#E4DFD0',
        ink: '#211F1B',
        inkSoft: '#5B564C',
        line: '#D3CCB8',
        accent: '#E14E1D',
        accentDeep: '#B23B14',
        accentSoft: '#F6D9C9',
        complete: '#3F6B4F',
        completeSoft: '#DCE6DC',
      },
      fontFamily: {
        display: ['var(--font-archivo)', 'sans-serif'],
        sans: ['var(--font-worksans)', 'sans-serif'],
        mono: ['var(--font-plexmono)', 'monospace'],
      },
      borderRadius: {
        panel: '3px',
        switch: '2px',
      },
      letterSpacing: {
        tightish: '-0.01em',
      },
      boxShadow: {
        none: 'none',
      },
    },
  },
  plugins: [],
};
