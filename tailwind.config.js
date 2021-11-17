module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFFFFF",
      ligth_blue: "#99FEFF",
      main_blue: "#2F86A6",
      strong_blue: "#000D6B",
      sky_blue: "#88E0EF",
      black: "#000",
      yellow: "#FBFF00",
      day: "#58BAC9",
      nigth: "#494E60",
      red: "#FF0000",

    },
    screens:{
      'xsm':'450px', // => @media (min-width: 450px) { ... }
      'sm':'640px', // => @media (min-width: 640px) { ... }
      'md':'768px', // => @media (min-width: 768px) { ... }
      'lg':'1024px', // => @media (min-width: 1024px) { ... }
       
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
}
