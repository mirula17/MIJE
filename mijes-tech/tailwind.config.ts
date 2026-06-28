import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50:  "#FFF0F4",
          100: "#FFD6E4",
          200: "#FFB3CC",
          300: "#FF8FB3",
          400: "#F06292",
          500: "#E91E8C",
          600: "#D81B60",
          primary: "#E8547A",
          dark:    "#C9184A",
          light:   "#FFF0F4",
          medium:  "#FFB3CC",
        },
        rose: {
          bg:     "#FFF5F7",
          card:   "#FFF0F4",
          border: "#FFD6E4",
        },
        onyx: "#1A1A1A",
        charcoal: "#333333",
        muted: "#888888",
        "light-gray": "#F8F8F8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "pink-gradient": "linear-gradient(135deg, #FFF0F4 0%, #FFE4EC 100%)",
        "hero-gradient": "linear-gradient(135deg, #FFF5F7 0%, #FFE8EF 50%, #FFF0F4 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "float":   "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
