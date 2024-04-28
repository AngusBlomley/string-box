/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'grass-green': '#4DAE51',
        'clay-red': '#D24E30',
        'tennis-ball-yellow': '#DDEE23',
        'midnight-blue': '#2A3756',
        'off-white': '#F7F9F9'
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'hiraKakuW8': ['hiraKaku', 'sans-serif'],
        'hiraKakuW6': ['hiraKaku', 'sans-serif'],
        'hiraKakuW3': ['hiraKaku', 'sans-serif'],
        'KozGoPr6NRegular': ['KozGoPr6NRegular', 'sans-serif']
      }
    }
  },
  plugins: [],
};


