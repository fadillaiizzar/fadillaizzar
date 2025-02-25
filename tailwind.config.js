/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },

      colors: {
        'cbeige': '#F5EFEB',
        'csky':'#C8D9E6',
        'cteal': '#567C8D',
        'cnavy':'#2F4156',
        'cdeepnavy':'#0F1A2B',
      },

      screens: {
        'cust': '920px',
        'cust2': '1300px',
        'cust3': '1100px',
      },

      boxShadow: {
        'top-bottom': '0 -10px 20px -5px rgba(0, 0, 0, 0.1), 0 10px 20px -5px rgba(0, 0, 0, 0.1)', 
      },
    },
  },
  plugins: [],
}

