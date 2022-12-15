/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },

      colors : {
        'door' : '#A0A0A0',
        // 'input-color' : "#E1E0E0",
        'input-color' : '#e7ebee',
        'dark-red':'#960000'
      },
    },
  },
  plugins: [require("daisyui")],
}
