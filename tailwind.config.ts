import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        slideInLeft: {
          "0%": {
              visibility: "visible",
              transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
              transform: "translate3d(0, 0, 0)",
          },
        },
        slideOutLeft: {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(-100%, 0, 0)",
            },
        },
        slideInRight: {
            "0%": {
                visibility: "visible",
                transform: "translate3d(100%, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            },
        },
        slideOutRight: {
            "0%": {
                transform: "translate3d(0, 0, 0)",
            },
            "100%": {
                visibility: "hidden",
                transform: "translate3d(100%, 0, 0)",
            },
        },
        zoomIn: {
          "0%": {
            opacity: "0",
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "100%": {
            opacity: "1",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite",
        slideInLeft: 'slideInLeft 1.5s ease-in-out 0s 1',
        slideOutLeft: 'slideOutLeft 1.5s ease-in-out 0s 1',
        slideInRight: 'slideInRight 1.5s ease-in-out 0s 1',
        slideOutRight: 'slideOutRight 1.5s ease-in-out 0s 1',
        zoomIn: 'zoomIn 1.5s ease-in-out 0s 1',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
