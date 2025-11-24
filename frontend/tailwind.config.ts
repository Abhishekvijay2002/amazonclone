import type { Config } from "tailwindcss";
import tailwindScrollbarHide from 'tailwind-scrollbar-hide'; 

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amazon: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollbarHide], 
};

export default config;