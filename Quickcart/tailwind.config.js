module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust-building navy
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#1E3A8A" // blue-900
        },
        // Secondary Colors - Supporting blue
        secondary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          DEFAULT: "#3B82F6" // blue-500
        },
        // Accent Colors - High-conversion orange
        accent: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          DEFAULT: "#F97316" // orange-500
        },
        // Background Colors
        background: "#FFFFFF", // white
        surface: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          DEFAULT: "#F8FAFC" // slate-50
        },
        // Text Colors
        text: {
          primary: "#111827", // gray-900
          secondary: "#6B7280", // gray-500
          muted: "#9CA3AF" // gray-400
        },
        // Status Colors
        success: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          DEFAULT: "#10B981" // emerald-500
        },
        warning: {
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          DEFAULT: "#F59E0B" // amber-500
        },
        error: {
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          DEFAULT: "#EF4444" // red-500
        },
        // Border Colors
        border: {
          light: "#F3F4F6", // gray-100
          DEFAULT: "#E5E7EB" // gray-200
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800'
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        'cta-hover': '0 6px 12px -2px rgba(0, 0, 0, 0.15)'
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms'
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out'
      },
      animation: {
        'cart-update': 'cartUpdate 300ms ease-in-out'
      },
      keyframes: {
        cartUpdate: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' }
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}