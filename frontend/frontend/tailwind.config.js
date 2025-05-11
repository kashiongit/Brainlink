/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors : {
        grey : {
          //"#eeeeef"
          100 :" #e6e9ed",
          200 : " #f6f6f6",
          600 : "#95989c",

        },
        purple : {
          //bg of secondry button
          200 : "#d9ddee",
          //text of secondry button
          500 :"#8883c5",
         //bg of primary button
          600 : "#7671c5",
        }
      }
    },
  },
  plugins: [],
}

