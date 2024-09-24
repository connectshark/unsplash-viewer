/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)'
      },
      fontFamily: {
        'noto': ['Poppins', 'Noto Sans TC', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
