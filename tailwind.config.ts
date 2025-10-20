import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0f", // near-black background
        foreground: colors.slate[100], // light foreground for dark UI
        primary: {
          DEFAULT: colors.orange[600],
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: colors.slate[800],
          foreground: colors.slate[100],
        },
        destructive: {
          DEFAULT: colors.red[600],
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: colors.slate[800],
          foreground: colors.slate[300],
        },
        accent: {
          DEFAULT: colors.slate[800],
          foreground: colors.slate[100],
        },
        popover: {
          DEFAULT: "#111317",
          foreground: colors.slate[100],
        },
        card: {
          DEFAULT: "#0f1115",
          foreground: colors.slate[100],
        },
        border: colors.slate[800],
        input: colors.slate[800],
        ring: colors.slate[200],
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;


