/**
 * Design Tokens
 * 
 * Centralized design system tokens for consistent styling across the application.
 * Inspired by Tom Sachs' minimal, industrial aesthetic.
 */

export const designTokens = {
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    lineHeight: {
      tight: '1',
      normal: '1.5',
      relaxed: '1.75',
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
    },
  },

  // Colors
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      50: '#f9f9f9',
      100: '#f3f3f3',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
  },

  // Spacing (Tailwind default scale)
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    40: '10rem',
    48: '12rem',
    56: '14rem',
    64: '16rem',
  },

  // Border
  border: {
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
    radius: {
      none: '0',
      sharp: '0',
    },
  },

  // Design Principles
  principles: {
    minimalism: {
      description: 'Remove all unnecessary elements, focus on content and function',
    },
    utilitarian: {
      description: 'Functional over decorative, clear hierarchy, direct communication',
    },
    industrial: {
      description: 'Bold typography, geometric shapes, high contrast, monochromatic palette',
    },
    cultureEngineering: {
      description: 'Professional yet creative, communicates expertise and vision',
    },
  },
} as const

export type DesignTokens = typeof designTokens
