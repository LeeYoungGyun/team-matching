module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      padding: {
        'custom-button': '1em 1.5em',
      },
      fontSize: {
        'custom-button': '1em',
      },
      borderRadius: {
        'custom-button': '4px',
      },
      colors: {
        white: '#ffffff',
        buttonFirstGradientStart: '#e55d87',
        buttonFirstGradientEnd: '#5fc3e4',
        buttonSecondGradientStart: '#1488cc',
        buttonSecondGradientEnd: '#2b32b2',
      },
      boxShadow: {
        'button-first': '0 2px 25px rgba(229, 93, 135, 0.5)',
        'button-second': '0 2px 25px rgba(20, 137, 204, 0.5)',
      },
      fontFamily: {
        'sans-custom': ['Helvetica', 'Arial', 'sans-serif'],
      },
      margin: {
        'button-bottom': '20px',
      },
    }
  },
  plugins: [
    function ({ addComponents }) {
      const buttons = {
        '.button': {
          padding: '1em 1.5em',
          fontSize: '1em',
          fontWeight: '400',
          fontFamily: '"Helvetica", "Arial", sans-serif',
          borderRadius: '4px',
          cursor: 'pointer',
          appearance: 'none',
          border: 'none',
          color: '#ffffff',
          marginBottom: '20px',
        },
        '.button:focus': {
          outline: 'none',
        },
        '.button-first': {
          backgroundImage: 'linear-gradient(to right, #e55d87, #5fc3e4)',
          boxShadow: '0 2px 25px rgba(229, 93, 135, 0.5)',
        },
        '.button-first:active': {
          backgroundImage: 'linear-gradient(to right, rgba(229, 93, 135, 0.9), rgba(95, 195, 228, 0.9))',
        },
        '.button-second': {
          backgroundImage: 'linear-gradient(to right, #1488cc, #2b32b2)',
          boxShadow: '0 2px 25px rgba(20, 137, 204, 0.5)',
        },
        '.button-second:active': {
          backgroundImage: 'linear-gradient(to right, rgba(20, 136, 204, 0.9), rgba(43, 50, 178, 0.9))',
        },
      }
      addComponents(buttons)
    }
  ]
};
