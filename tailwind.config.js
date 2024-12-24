/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        ssm: "320px",
        ssml: "375px", // Extra small screen
        llm: "420px", // Small mobile screen
        xxlm: "769px", // Medium-sized screen
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInRow: "fadeInRow 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRow: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
