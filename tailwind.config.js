/** @type {import('tailwindcss').Config} */

export default {

  darkMode: "class",

  content: [

    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",

  ],

  theme: {

    extend: {

      colors: {

        primary: "#15803d",

        secondary: "#2563eb",

        danger: "#dc2626",

        warning: "#f97316",

      },

      borderRadius: {

        xl2: "1.5rem",

      },

      boxShadow: {

        soft:
          "0 10px 30px rgba(0,0,0,0.08)",

      },

      animation: {

        float:
          "float 3s ease-in-out infinite",

      },

      keyframes: {

        float: {

          "0%, 100%": {
            transform:
              "translateY(0px)",
          },

          "50%": {
            transform:
              "translateY(-10px)",
          },

        },

      },

    },

  },

  plugins: [],

}