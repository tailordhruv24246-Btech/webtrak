

// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}", // Make sure this includes your component files
// ];
// export const theme = {
//   extend: {
//     animation: {
//       scroll: "scroll 10s linear infinite",
//       bip : 'bip 1s ease-in-out infinite',
//     },
    
//     keyframes: {
//       bip :{
//         '0% , 100%': {opacity : '1'},
//         '50%' : {opacity: '0'},
//       },
//       scroll: {
//         "0%": { transform: "translateX(100%)" },
//         "100%": { transform: "translateX(-100%)" },
//       },
//     },
//   },
// };
// export const darkMode = 'class';
// export const plugins = [];




/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const darkMode = 'class';
export const theme = {
  extend: {
    keyframes: {
      bip: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0' },
      },
      scroll: {
        "0%": { transform: "translateX(100%)" },
        "100%": { transform: "translateX(-100%)" },
      },
    },
    animation: {
      bip: 'bip 1s ease-in-out infinite',
      scroll: 'scroll 10s linear infinite',
    },
  },
};
export const plugins = [];
