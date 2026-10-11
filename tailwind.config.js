/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // BiQ brand — from logo
        primary: '#123448',          // navy
        'primary-dark': '#0B2333',
        'primary-light': '#4E6776',
        accent: '#8BB9C8',           // light blue (Q-dot)
        'accent-dark': '#5F97AB',
        'accent-light': '#E1EDF1',
        'accent-soft': '#F1F6F8',
        background: '#F5F7F9',
        surface: '#FFFFFF',
        ink: '#123448',
        muted: '#5B6B76',
        divider: '#E3E8EC',
        deep: '#0B2333',
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
      },
    },
  },
  plugins: [],
}
