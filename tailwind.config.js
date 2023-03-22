/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lighter: "#E1E8ED",
        lightest: "#f7f9f9",
        primary: "#48bab4",
        accent: "#202440",
        light: "#f1f1f1",
        urgent: "#ff5757",
        warning: "#f9c518",
        opportunity: "#32bcfa",
        perfect: "#9dd60e",
        darkcyan: "#8898AA",
        "bluish-cyan": "#C8D7DC",
        alto: "#DDDDDD",
        catskillwhite: "#F0F2F8",
        cerulean: "#00A8D1",
        malibu: "#74B9FF",
        palesky: "#6B7580",
        "astronaut": "#243575",
        "silver-chalice": "#ADADAD",
        "white": {
          DEFAULT: "#FFFFFF",
          smoke: "#F5F5F5"
        },
        "blue": {
          100: "#E4E4E6",
          200: "#C5C6CA",
          300: "#A1A2AA",
          400: "#727482",
          500: "#051847",
          600: "#04153F",
          700: "#031236",
          800: "#030F2C",
          900: "#020A1F",
          nile: "#172B4D",
          dodger: "#577CFF",
          bayou: "#546681",
          "down-river": "#0A2159",
          "lapis": "#1E3B80",
          "catalina": "#0F2A6B",
          "tealish": "#101C39"
        },
        "purple": {
          100: "#EAE5FE",
          200: "#D4C9FE",
          300: "#BBA8FE",
          400: "#9E7EFE",
          500: "#7B3DFE",
          600: "#6E36E3",
          700: "#5F2FC4",
          800: "#4D26A0",
          900: "#371B71"
        },
        "green": {
          100: "#E4F5E8",
          200: "#C6EACF",
          300: "#A3E0B3",
          400: "#76D492",
          500: "#25C966",
          600: "#21B35B",
          700: "#1C9B4F",
          800: "#177F40",
          900: "#10592D"
        },
        "gray": {
          DEFAULT: "#808080",
          100: "#EFEFF0",
          200: "#DEDEE0",
          300: "#CBCCD0",
          400: "#B7B8BE",
          500: "#A1A2AA",
          600: "#909098",
          700: "#7C7D83",
          701: "#344054",
          800: "#65666B",
          900: "#48484C",
          bright: "#E9E9E9",
          dove: "#707070",
          athens: "#E4E7EB"
        },
        "red": {
          100: "#FFECE8",
          200: "#FFC8C8",
          300: "#FFA7A7",
          400: "#FF7C7C",
          500: "#FF3838",
          600: "#E43232",
          700: "#C52B2B",
          800: "#A12323"
        },
        "orange": {
          100: "#FFF1E5",
          200: "#FFE2C8",
          300: "#FFD2A7",
          400: "#FFC17C",
          500: "#FFAF38",
          600: "#E49C32",
          700: "#C5872B",
          800: "#A16E23",
          "light": "#FFB038"
        },
        "light-purple": {
          100: "#F3EFFF",
          200: "#D7D4E7",
          300: "#C1BCDA",
          400: "#A89FCC",
          500: "#8A7DBE",
          600: "#7B6FA9",
          700: "#6A6093",
          800: "#574F78"
        },
        "light-blue": {
          100: "#E2F8FF",
          200: "#C8E4FF",
          300: "#A7D6FF",
          400: "#7CC7FF",
          500: "#38B7FF",
          600: "#32A3E4",
          700: "#2B8DC5",
          800: "#2373A1",
          "french-pass": "#AFEBFC"
        },
        "navy": {
          100: "#EEF5F6",
          200: "#D5DADD",
          300: "#BCC5CB",
          400: "#A0AEB6",
          500: "#7F94A0",
          600: "#71848F",
          700: "#62727B",
          800: "#505D65"
        },
        "light-green": {
          100: "#E5FFE2",
          200: "#D6EACD",
          300: "#BEE0AF",
          400: "#A4D48B",
          500: "#84C95A",
          600: "#76B350",
          700: "#669B45",
          800: "#537F38"
        }
      },
      borderRadius: {
        "circle": "50%"
      },
      animation: {
        "slide-down": "slide-down .5s ease-in-out",
        "slide-up": "slide-up .5s ease-in-out",
        "bounce-in-up": 'bounce-in-up .5s ease-in-out',
        "copied": "copied 0.5s ease-out"
      },
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)"
          },
          "100%": {
            transform: "translateY(0)"
          }
        },
        "slide-up": {
          "0%": {
            transform: "translateY(0)"
          },
          "100%": {
            transform: "translateY(-100%)"
          }
        },
        "bounce-in-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        "copied": {
          "from": {
            bottom: "-50%"
          },
          "to": {
            bottom: "50%"
          }
        }
      }
    },
    screens: {
      "3xs": "320px",
      "2xs": "360px",
      "xs": "480px",
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "2lg": "1080px",
      "xl": "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      avenir: [ "Avenir", "Arial", "Helvetica", "sans-serif" ],
      "avenir-next": [ "Avenir-Next", "Arial", "Helvetica", "sans-serif" ],
      "avenir-next-lt-pro": [ "Avenir-Next-Lt-Pro", "Arial", "Helvetica", "sans-serif" ],
      "switzer": [ "Switzer", "Arial", "Helvetica", "sans-serif" ],
      "plus-jakarta-sans": [ "Plus Jakarta Sans", "Arial", "Helvetica", "sans-serif" ]
    }
  },
  plugins: [],
};
