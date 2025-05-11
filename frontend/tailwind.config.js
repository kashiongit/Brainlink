import { isMethodDeclaration } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens : {
      desktop : '1248px',
      tablet : '960px',
      mobile : '375px',
    },
    extend: {
      colors : {
        white :"#FFFFFF",
        purple: '#3F3CBB',
        midnight : '#121063',
        metal:'#565584',
        'tahiti-blue' : '#3AB7BF',
        'cool-white' :'#ECEBFF',
        'bubble-gum' : '#FF77E9', 
        'copper-rust' :'#78DCCA',

      },
      boxShadow : {
        sm  : '0px 2px 4px 0px rgba(11, 10, 55, 0.15)',
        lg :  '0px 8px 20px 0px rgba(18, 16, 99, 0.06)',
      },
      borderRadius : {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing : {},
      fontFamily : {
        satoshi : 'Satoshi, sans-serif',
        inter : 'Inter, sans-serif',
      },
      fontSize: {
        xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
        sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        lg: ['18px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
        xl: ['24px', { lineHeight: '36px', letterSpacing: '-0.03em' }],
        h4: ['36px', { lineHeight: '48px', letterSpacing: '-0.032em' }],
        h3: ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
        h2: ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
        h1: ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }]
      }
    },
  },
  plugins: [],
}

