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
        // LEGO brand colors
        lego: {
          red: '#DA291C',      // Hlavní LEGO červená
          yellow: '#FFD700',   // LEGO žlutá
          blue: '#0055BF',     // LEGO modrá
          green: '#00A550',    // LEGO zelená
        },
      },
    },
  },
  plugins: [],
};

export default config;
