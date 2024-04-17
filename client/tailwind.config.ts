import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        dark: {
          100: "#ffffff",
          200: "#1f2937",
          300: "#111827",
          400: "#1f2937",
          500: "#1f2937",
          600: "#1f2937",
        },
        light: {
          100: "#382bf0",
          200: "#5e43f3",
          300: "#7a5af5",
          400: "#9171f8",
          500: "#a688fa",
          600: "#ba9ffb",
        },
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Josefin: ["var(--font-Josefin)"],
      },

      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1500px": "1500px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [],
};
export default config;
