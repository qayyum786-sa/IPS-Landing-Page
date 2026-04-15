/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Poppins'", 'sans-serif'],
        display: ["'Playfair Display'", 'serif'],
      },
      colors: {
        ips: {
          purple:      '#5b21b6',
          'purple-dk': '#3b0764',
          'purple-lt': '#ede9fe',
          'purple-md': '#7c3aed',
          green:       '#059669',
          'green-lt':  '#d1fae5',
          gold:        '#d97706',
          'gold-lt':   '#fef3c7',
          bg:          '#faf9ff',
          text:        '#1e1b4b',
        },
      },
      keyframes: {
        fadeUp:   { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        fadeIn:   { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        scaleIn:  { '0%': { opacity: 0, transform: 'scale(0.95)' }, '100%': { opacity: 1, transform: 'scale(1)' } },
        wiggle:   { '0%,100%': { transform: 'rotate(-3deg)' }, '50%': { transform: 'rotate(3deg)' } },
        bounceSm: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s ease-out forwards',
        'fade-in':   'fadeIn 0.5s ease-out forwards',
        'scale-in':  'scaleIn 0.4s ease-out forwards',
        'wiggle':    'wiggle 0.6s ease-in-out',
        'bounce-sm': 'bounceSm 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
