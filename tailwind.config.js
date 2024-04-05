/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: function() {
        return {
          'dashboard-bg': "url('./src/assets/bg-dashboard.svg')",
        };
      },
    },
  },
  plugins: [],
}
