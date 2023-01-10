/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '200': '#a0a0a0',
          '500': '#494949',
          '600': '#2e2e2e',
          '700': '#2B2B2B',
          '800': '#232323',
        },
      },
      boxShadow: {
        'boxSmRed': '2px 2px 6px 2px #e0161688',
        'boxSm': '3px 3px 8px 2px #0000004b',
        'boxMd': '4px 4px 14px 4px #0000004b',
        'boxLg': '8px 8px 30px #0000006e',
        'boxXl': '29px 16px 26px #0000003D',
        'box2xl-y': '0px -12px 24px 8px #00000066 , 0px 12px 24px 8px #00000066',

        'card': '15px 15px 30px 10px #0000006e',
        'topMd': '-20px -20px 12px #00000088',
        'bottomMd': '0 8px 10px #00000077',

        'insetTitle': 'inset 5px 5px 15px #00000065',
        'insetSm': 'inset 2px 4px 7px #00000085 , 6px 6px 10px #00000079',
      },
    },
  },
  plugins: [],
}
