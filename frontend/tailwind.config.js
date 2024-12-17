/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import scrollbarHide from 'tailwind-scrollbar-hide';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ms: '300px', // Custom xs breakpoint (you can choose any value here)
      },
      spacing: {
        '72': '18rem',  
        '80': '20rem',
        '96': '24rem',  
      },
      colors: {
        'dark': '#00061B',
        'navblue':'#003DFF',
        'navWhite':'#FFFFFF99',
        'navbg':'rgba(0, 61, 255, 0.1)',
        'buttonColor':'#0039EF',
        'customBlue': 'rgba(0, 61, 255, 0.05)',
        'customGradient1': 'rgba(255, 255, 255, 0)',
        'customGradient2': 'rgba(255, 255, 255, 0.049)',
      },
      textShadow: {
        glow: "0px 0px 18px #003DFFB2",
      },
      keyframes: {
        scroll: {
          "from": { transform: "translateX(0)" },
          "to": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 20s linear infinite",
      },
    },
  },
  plugins: [
    scrollbarHide,
    function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0px 0px 18px #003DFFB2",
        },
      });
    },
    forms,
    typography,
    aspectRatio,
  ],
};


