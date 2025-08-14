/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gaps-green': '#4ade80',
        'gaps-orange': '#fb923c',
        'gaps-blue': '#60a5fa',
      }
    },
  },
  plugins: [],
}