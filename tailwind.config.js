module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ff7000'
        }
      }
    },
  }
}
