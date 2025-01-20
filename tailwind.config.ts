import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["'Manrope'", "sans-serif"],
    
  
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
          primaryLight:"#C6E7FF",
          primaryDark:"#030637",
          primaryYellow:"#F6C90E",
          primaryBlack:"#282930",
          primaryGray:"#777C90",
          primarybg:"#F2F4F6",
      },
    },
  },
  plugins: [],
} satisfies Config;
