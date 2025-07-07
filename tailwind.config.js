/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Add the root files
    "./app/**/*.{js,jsx,ts,tsx}", // Add the source files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins_regular: ['Poppins_Regular'],
        poppins_bold: ['Poppins_Bold'],
        poppins_italic: ['Poppins_Italic'],
        poppins_semiBold: ['Poppins_SemiBold'],
        poppins_Medium: ['Poppins_Medium'],
        Poppins_BoldItalic: ['Poppins_BoldItalic'],
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
