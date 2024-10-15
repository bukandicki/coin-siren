import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cs-green": "#00C696",
        "cs-yellow": "#FBFF23",
        "cs-blue": "#4A77FF",
        "cs-light-blue": "#8BC4FF",
        "cs-dark": "#343741",
        "cs-slate": "#344054",
        "cs-light-slate": "#24252F",
        "cs-grey": "#5E626F",
      },
    },
  },
  plugins: [],
};
export default config;
