/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      boxShadow: {
        key: "0.125rem 0.125rem 0.03125rem 0.0625rem rgba(238, 238, 238, 0.35)",
        "modal-key":
          "0.078125rem 0.078125rem 0.015625rem 0.140625rem rgba(54, 57, 74, 1)",
        "line-down": "0rem 0.05rem 0rem 0rem rgba(49, 52, 68, 1)",
        "line-up": "0rem -0.05rem 0rem 0rem rgba(49, 52, 68, 1)",
      },
    },
  },
  plugins: [],
};
