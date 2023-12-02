import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mainTheme: {
          "primary": "#4D4DFF",    // A vibrant blue, ideal for key elements and calls to action.
          "secondary": "#FFD700",  // A bright gold, perfect for highlighting and accents.
          "accent": "#7C83FD",     // A softer purple, great for subtle highlights.
          "neutral": "#3A3B3C",    // A deep gray, suitable for text and primary content.
          "base-100": "#F0F2F5",   // Pure white, for background and clean spaces.
          "info": "#17A2B8",       // A calming blue, for informational elements.
          "success": "#28A745",    // A rich green, for success messages and icons.
          "warning": "#FFC107",    // A warm amber, for warnings and alerts.
          "error": "#DC3545",      // A strong red, for errors and important cautions.   
        },
      },
    ],
  },
};
export default config;