/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          card: 'rgba(10, 25, 47, 0.75)',
          border: 'rgba(0, 162, 255, 0.25)',
          blue: '#0077FF',
          bright: '#00A2FF',
          cyan: '#00D2FF',
          neon: '#00F0FF',
          navy: '#0B192C',
          dark: '#060B1E',
          text: '#94A3B8',
          textMuted: '#64748B',
          glow: 'rgba(0, 162, 255, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        heading: ['Orbitron', 'Space Grotesk', 'sans-serif'],
        tech: ['Rajdhani', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 162, 255, 0.12) 1px, transparent 1px)",
        'cyber-gradient': "linear-gradient(180deg, rgba(6, 11, 30, 0.95) 0%, rgba(3, 7, 18, 0.98) 100%)",
        'blue-glow': "radial-gradient(circle at 50% 50%, rgba(0, 162, 255, 0.15) 0%, transparent 70%)"
      },
      boxShadow: {
        'hud': '0 0 20px rgba(0, 162, 255, 0.2), inset 0 0 15px rgba(0, 162, 255, 0.1)',
        'hud-bright': '0 0 30px rgba(0, 210, 255, 0.35), inset 0 0 20px rgba(0, 210, 255, 0.15)',
        'glow-blue': '0 0 25px rgba(0, 119, 255, 0.5)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
