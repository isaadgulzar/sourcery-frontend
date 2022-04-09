module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow:{
        '3xl':'0px 4px 30px rgba(19, 10, 68, 0.1)'
      },
      objectPosition:{
        'left-center':'left center',
        'right-center':'right center'
      },
      colors:{
        blue:{
          dark:' #130A44',
          light:'#605AF6',
          lighter:'#1E86FF'
        },
        orange:{
          light:'#F7931E;',
          lighter:'rgba(247, 147, 30,0.4)'
        },
        shily:{
          light:'rgba(255, 255, 255, 0.4)',
          lighter:'rgba(255, 255, 255, 0.2)'
        },
        gray:{
          light:'#cecece'
        },
        magento:{
          dark:'#130A44'
        },
        black:{
          dark:'#1B1B1B'
        },
        purple:{
          light:' #DCD0FF',
          medium:'#605AF6',
          dark:'#605AF6'
        },
        green:{
          light:'#73DA90'
        }
      },
      borderRadius: {
        'xs': '2px',
      }
    }
  },
  variants: {
    extend: {
      padding:['hover']
    },
  },
  plugins: [],
}
