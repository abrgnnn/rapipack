
module.exports = {
  content: ["./*.html", "./**/*.js"],
  theme: { extend: {} },
  plugins: [],

  theme: {
    extend: {
      colors: {
        'brand-navy': '#201f7c',
        'brand-blue': '#0072bc',
        'brand-cream': '#F7F2EB',
        'brand-orange': '#F99F15',
        'brand-red': '#E4131C'
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.8s ease-out',
        'fade-in-up': 'fadeInUp 1s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  }
}
