/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        '65': '17rem',
      },
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
          800: '#91cb3d',
          600: '#60A855',
          500: '#4CAF50',
          400: '#66BB6A',
          200: '#193820',
          201: '#2c4d33',
          300: '#90e5ac',
        },
        gray: {
          10: '#EEEEEE',
          20: '#a2aab8',
          30: '#7B7B7B',
          50: '#f6f7f8',
          90: '#4d4f5b',
          200:'#dadde3',
          700:'#6e7287',
          120: '#667380',
          300:'#c1c7cf',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#045fa2',
          200: '#0c97d0',
          120: '#41c1df',
          130:'#043b7f',
        },
        yellow: {
          50: '#FEC601',
          200:'#F9FAFB',
        },
      },
      backgroundColor: {
        'your-semi-transparent-color': 'rgba(169, 169, 169, 0.5)',
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')",
        'hero-about': "url('/hero-about.png')",
        'hero-about1': "url('/hero-about-1.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [
],
};
