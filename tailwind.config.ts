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
        lightTheme: {
          "primary": "#0065ff",
          "secondary": "#00d300",
          "accent": "#00b000",
          "neutral": "#212a32",
          "base-100": "#fbfffb",
          "info": "#00aee4",
          "success": "#00ffc3",
          "warning": "#c19300",
          "error": "#cc2446",
          body: {
            "background-color": "#e3e6e6",
          }
        },
      },
    ],
  },
};
export default config;
