/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mini: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    // From shadCN
    container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        // Original Green Shades
        darkerGreen: "#065f46", // green-800
        lighterGreen: "#34D399", // green-400
        veryLightGreen: "#D1FAE5", // green-100

        accent: "#34D399", // Same as lighterGreen
        dark1: "#044f3b", // Darker than darkerGreen
        dark2: "#065f46", // Same as darkerGreen (deep green)
        dark3: "#0b8065", // Slightly lighter than dark2
        blurred: "rgba(6, 95, 70, 0.5)", // DarkerGreen with 50% opacity
        transparent: "rgba(6, 95, 70, 0.01)", //transparent 

        textlight: "#83c5af", // Light version for text, lighter than lighterGreen
        light1: "#E6FAF2", // Very Light Green
        light2: "#C4EDE0", // Between veryLightGreen and light1
      },

      fontSize: {
        title: "2rem",
        lg: "1.5rem",
        md: "1rem",
        ms: "0.75rem",
        sm: "0.5rem",
        xs: "0.25rem"
      },
  
      //border radius ... TRY to use one of these values (easy to change)
      borderRadius: {
        lg: `20px`,
        md: `10px`,
        sm: "5px",
      },

      boxShadow: {
        'button-green': '2px 3px 5px #0b8065'
      }

    },
    transitionDuration: {
      DEFAULT: "300ms",
    },
  },
  plugins: [],
};