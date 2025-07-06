/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B00",         // 🔶 Highlight color (logo, buttons)
        background: "#0F0F1B",      // 🌌 Main background (dark theme)
        surface: "#1C1C2D",         // 🟤 Card background / sections
        sidebar: "#141420",         // 🧊 Sidebar background
        secondary: "#2A2A40",       // 🔹 Secondary surface / hover
        accent: "#5C6EFF",          // 🔵 Button / tag accents
        purpleAccent: "#8B5CF6",    // 🟣 Extra accent (optional)
        hover: "#2D2D3F",           // 🔘 Hover bg for buttons
        textPrimary: "#FFFFFF",     // ⚪ Main text
        textSecondary: "#A3A3B3",   // ⚫ Subtext or muted labels
        premium: "#FACC15",         // 💛 Premium user label
        danger: "#EF4444",          // 🔴 Logout or delete action
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
