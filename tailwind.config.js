/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        LexendDeca: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        Yellow: "#FCB72B",
        DarkGray: "#333A44",
        DarkNavy: "#495567",
        DimGray: "#939CAA",
        LightGray: "#E5ECF4",
        Snow: "#F2F5F9",
        LightYellow: "#FFF4DF",
      },
      backgroundImage: {
        "mobile-hero": "url('./assets/images/home-hero-mobile.jpg')",
        "tablet-hero": "url('./assets/images/home-hero-tablet.jpg')",
        "desktop-hero": "url('./assets/images/home-hero-desktop.jpg')",
        "circle": "url('./assets/patterns/circle.svg')",
        "semi-circle": "url('./assets/patterns/semi-circles.svg')",
        "white-circle": "url('./assets/patterns/white-circles.svg')",

        // About Page
        "about-hero-mobile": "url('./assets/images/about-hero-mobile.jpg')",
        "about-hero-tablet": "url('./assets/images/about-hero-tablet.jpg')",
        "about-hero-desktop": "url('./assets/images/about-hero-desktop.jpg')",

        // Careers Page 
        "careers-location-hero-mobile": "url('./assets/images/careers-location-hero-mobile.jpg')",
        "careers-location-hero-tablet": "url('./assets/images/careers-locations-hero-tablet.jpg')",
        "careers-location-hero-desktop": "url('./assets/images/careers-locations-hero-desktop.jpg')"
      },
    },
  },
  plugins: [
    percentageWidth,
  ],
};
