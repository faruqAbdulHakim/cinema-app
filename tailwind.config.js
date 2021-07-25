const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        '.bg-main': {
          'background-image':
            'linear-gradient(rgba(0,0,0,0.5) 30%,rgba(0,0,0,0.9)), url(/main.jpg)',
          'background-size': 'cover',
        },
      };
      addUtilities(utilities);
    }),
    require('tailwind-scrollbar-hide'),
  ],
};
