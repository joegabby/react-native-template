/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Add the root files
    "./app/**/*.{js,jsx,ts,tsx}", // Add the source files
  ],
  theme: {
    extend: {
      fontFamily: {
        Niramit_Bold: ['Niramit_Bold'],
        Niramit_SemiBold:['Niramit_SemiBold'],
        Niramit_Light: ['Niramit_Light'],
        Niramit_Medium: ['Niramit_Medium'],
        Niramit_Regular:['Niramit_Regular'],
      },
      colors:{
        p_blue:'#002966',
        p_green:'#215346',
        sec_green:'#45A27D',
        p_faded_green:'#45A27D80',
        p_grey:'#D9D9D9',
        p_red:'#E74C3C',
        p_text:'#535862',
        p_h_text:'#181D27'
      }
    },
  },
  plugins: [],
};
