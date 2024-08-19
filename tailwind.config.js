/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#B4D4FF',
        paleblue: '#B4D4FF',
        palegreen: '#C3E2C2'
      },
      backgroundImage: {
        'custom-pattern': "radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0)",
      },
      backgroundSize: {
        'custom-size': '30px 30px',
      },
      backgroundPosition: {
        'custom-position': '-5px -5px',
      },
    },
  },
  plugins: [],
}
