import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue: "#0D1727",
        lighOrange: "#F26E23",
        darkOrange: "#F24606",
        lightBlue: "#9BE3F2",
        lightPurple: "#CABDF2",
        lightGrey: "#5F646C",
        backgroundWhite: "#FFF7F2",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({ addCommonColors: true })],
};
export default config;
