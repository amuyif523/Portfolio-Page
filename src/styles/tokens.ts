export const tokens = {
  colors: {
    background: '#0a0a0a',
    foreground: '#ededed',
    accent: '#E2FD46', // Acid Lime
    muted: '#A1A1AA',
    border: '#27272A',
  },
  fonts: {
    display: 'var(--font-syne)',
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    '2xl': '8rem',
    '3xl': '12rem',
  },
  motion: {
    duration: {
      fast: 0.4,
      normal: 1.0,
      slow: 1.5,
    },
    ease: {
      default: [0.16, 1, 0.3, 1], // Expo out-ish
      linear: [0, 0, 1, 1],
    },
  },
} as const
