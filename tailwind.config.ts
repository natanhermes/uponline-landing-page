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
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-light': 'rgba(255, 255, 255, 0.5)',
        'custom-light-blue': '#4791FFD6',
        'custom-blue': '#1B3FC0',
        'custom-green': '#1BC0A4',
      },
      backgroundImage: {
        'up-online-bg-planet-one': "url('/assets/up-planet-1.png')",
        'up-online-bg-boy': "url('/assets/up-boy-vector.png')",
        'light-focus-blue': 'radial-gradient(circle, rgba(71, 145, 255, 0.84) 0%, rgba(71, 145, 255, 0) 100%)',
        'custom-text-gradient': 'linear-gradient(270deg, #1B3FC0 13.81%, #1BC0A4 113.15%)',
        'custom-text-gradient-second': 'linear-gradient(294.43deg, #1B3FC0 28.16%, #C01B1B 75.63%)',
        'custom-gradient-line-break': 'linear-gradient(90deg, #1BAEA8 36.11%, #111022 97.61%)',
      },
      fontFamily: {
        jakartaSans: ['Plus Jakarta Sans', 'sans-serif'],
        stickSans: ['Stick No Bills', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
