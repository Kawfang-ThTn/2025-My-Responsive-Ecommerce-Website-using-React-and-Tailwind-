/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: 'class', //พิมพ์เพิ่มเติม

  theme: {
    extend: {
      //พิมพ์เพิ่มเติม
      colors:{
        primary: '#f42c37',
        secondary: '#f42c37',
        brandYellow: '#fdc62e',
        brandGreen: '#2dcc6f',
        brandBlue: '#1376f4',
        brandWhite: '#eeeeee',
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '3rem',
      }
    }, //พิมพ์เพิ่มเติม

  },
  plugins: [],
}
}