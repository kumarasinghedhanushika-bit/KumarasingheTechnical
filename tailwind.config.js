// Design tokens: change brand colours / fonts here.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 900: "#0a1428", 800: "#0f1f3d", 700: "#17294d" },
        brand: { DEFAULT: "#e11d2e", dark: "#b91c1c", soft: "#fdecee" },
      },
      fontFamily: { sans: ["Inter", "system-ui", "sans-serif"], display: ["Manrope", "Inter", "sans-serif"] },
    },
  },
  plugins: [],
};
