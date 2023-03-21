/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

      colors:{
        primary: "#e11931",
        lightGray: "#f8f9fa",
        green: "#5bbd80",
        gray:"#4a4b4f"
      },

      fontFamily:{
        roboto: ['Roboto', 'sans-serif']
      },
      fontSize:{
        huge: 'clamp(2rem, 6vw, 3rem)',
        semihuge: 'clamp(1.5rem, 6vw, 2.5rem)'
      },
      backgroundImage:{
        'redpic': "url('/dist/img/bg.png')"
      },
      skew:{
        '-6': '-6deg',
      }

    },

container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    }

  },
  plugins: [],
}
