import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b500ff",

          "primary-content": "#f1daff",

          "secondary": "#ff0000",

          "secondary-content": "#160000",

          "accent": "#00ff64",

          "accent-content": "#001603",

          "neutral": "#0e3132",

          "neutral-content": "#cbd2d2",

          "base-100": "#eefff1",

          "base-200": "#cfded2",

          "base-300": "#b1beb3",

          "base-content": "#141614",

          "info": "#0092ff",

          "info-content": "#000816",

          "success": "#009a00",

          "success-content": "#000900",

          "warning": "#ff7f00",

          "warning-content": "#160600",

          "error": "#ed324b",

          "error-content": "#140102",
        },
      },
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
} satisfies Config;