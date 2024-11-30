/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: "320px", // Extra small screen
        llm: "420px", // Small mobile screen
        xxlm: "769px", // Medium-sized screen
      },
    },
  },
  plugins: [],
};
