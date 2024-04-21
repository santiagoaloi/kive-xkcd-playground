/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  darkMode: 'class',
  theme: {
    extend: {

      theme: {
        borderWidth: {},
      },

      outlineWidth: {
        1: '1px',
        3: '3px',
      },

      outlineOffset: {
        3: '3px',
      },
    },
  },

  important: true,
}
