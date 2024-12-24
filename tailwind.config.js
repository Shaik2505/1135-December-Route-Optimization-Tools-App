/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        navbarBackground: "#FFFFFF",
        navbarText: "#333333",
        cardBackground: "#F9F9F9",
        cardShadow: "rgba(0, 0, 0, 0.1)",
        cardText: "#333333",
        primaryButtonBackground: "#f4a261",
        secondaryButtonBackground: "#E5E5E5",
        secondaryButtonText: "#333333",
        interactiveMapHighlight: "#FF4500",
        linkText: "#1E90FF",
        footerBackground: "#F1F1F1",
        footerText: "#666666",
        errorText: "#D32F2F",
        successText: "#388E3C",
        disabledText: "#BDBDBD",
        borderColor: "#E0E0E0",
        background: "#f5f1eb",
        textColor: "#333333",
        darkNavbarBackground: "#1C1C1C",
        darkNavbarText: "#FFFFFF",
        darkCardBackground: "#2B2B2B",
        darkCardShadow: "rgba(0, 0, 0, 0.4)",
        darkCardText: "#E0E0E0",
        darkPrimaryButtonBackground: "#1E90FF",
        darkSecondaryButtonBackground: "#3A3A3A",
        darkSecondaryButtonText: "#E0E0E0",
        darkInteractiveMapHighlight: "#FF8C00",
        darkLinkText: "#1E90FF",
        darkFooterBackground: "#1C1C1C",
        darkFooterText: "#A9A9A9",
        darkErrorText: "#FF6B6B",
        darkSuccessText: "#4CAF50",
        darkDisabledText: "#666666",
        darkBorderColor: "#3A3A3A",
        darkBackground: "#121212",
        darkTextColor: "#FFFFFF",
      },

      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.8s ease-in-out",
        slideOut: "slideOut 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
