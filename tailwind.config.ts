import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink_light: "#F8C8D8",  // Rosa claro
        pink_primary: "#F29DC1", // Rosa pastel
        purple_light: "#D1A6F0", // Morado pastel
        purple_primary: "#9C7BD5", // Morado suave
        lavender: "#E0C7FF",     // Lavanda
        blush: "#F4C9D9",        // Rosa suave
      },
      fontFamily: {
        Anaheim: ["Anaheim", "sans-serif"],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
