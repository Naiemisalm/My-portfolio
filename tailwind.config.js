/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},

  },
  daisyui: {
    themes: [ "forest"
      // {
      //   mytheme: {
      //     primary: "",
      //     secondary: "#f6d860",
      //     accent: "#37cdbe",
      //     neutral: "#3d4451",
      //     "base-100": "#ffffff",
      //   },
      // },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}