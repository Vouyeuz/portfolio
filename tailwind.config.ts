import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
        surface: token("surface"),
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-body)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
