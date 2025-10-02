import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      base: {
        light: "#FAF6F1",
        mid: "#f4e9daff",
        DEFAULT: "#eee2d0ff",
        dark: "#d09f71ff",
      },
      text: {
        primary: "#2E2C2A",
        secondary: "#5A5754",
        red: "#E85A4F",
        pink: "#b07f47ff"
      },
      accent: {
        red: "#D64545",
        blue: "#1E3D58",
      },
      neutral: {
        gray: "#C7C3BD",
      },
    },
    fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
  },
}
,
  plugins: [],
}
export default config
