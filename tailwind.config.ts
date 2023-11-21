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
          primary: "#8700ff",
          secondary: "#7e4e00",
          accent: "#00c500",
          neutral: "#110600",
          "base-100": "#d8fffe",
          info: "#23b0ff",
          success: "#00ffc3",
          warning: "#c19300",
          error: "#cc2446",
          body: {
            "background-color": "#e3e6e6",
          }
        },
      },
    ],
  },
};
export default config;
