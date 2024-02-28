/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["Space Mono", "monospace"],
        LexendDeca: ["Lexend Deca", "sans-serif"]
      }, 
      colors: {
         Yellow: '#FCB72B',
          DarkGray: '#333A44',
         DarkNavy: '#495567',
         DimGray: '#939CAA',
         LightGray: '#E5ECF4',
         Snow: '#F2F5F9',
         LightYellow: '#FFF4DF'
            },
            backgroundImage: {
              "mobile-hero": "url('./public/assets/images/home-hero-mobile.jpg')",
              "tablet-hero": "url('./public/assets/images/home-hero-tablet.jpg')",
              "desktop-hero": "url('./public/assets/images/home-hero-desktop.jpg')",
              "circle": "url('../public/assets/patterns/circle.svg')",
              "semi-circle": "url('./public/assets/patterns/semi-circles.svg')",
              "white-circle": "url('./public/assets/patterns/white-circles.svg')"
            }, 
    },
  },
  plugins: [],
}

