module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        'navy-900': '#0D2B55',
      },
      borderRadius: {
        '2xl': 'calc(var(--radius) + 16px)',
        '3xl': 'calc(var(--radius) + 32px)',
        xl: 'calc(var(--radius) + 8px)',
        lg: 'calc(var(--radius) + 4px)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 7vw, 5.5rem)', { lineHeight: '1' }],
        'section-title': ['clamp(1.75rem, 4vw, 3rem)', { lineHeight: '1.1' }],
      },
    },
  },
  plugins: [],
};
