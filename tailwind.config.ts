import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors (based on your color scheme)
      colors: {
        primary: '#31473A',          // Deep Green (good for primary buttons, text)
        secondary: '#7C8363',        // Olive Green (use in the sidebar, backgrounds of elements)
        accent: '#EDF4F2',           // Light Mint (backgrounds, input fields, light sections)
        error: '#DC3545',            // Unchanged; keep for alerts/errors
        success: '#28A745',          // Unchanged; good green for success states
        text: '#31473A',             // Same as primary for consistency
        background: '#EDF4F2',       // Base background color for a soft look
        'background-alt': '#7C8363', // Alternative background for contrast
        'background-secondary': '#F5F5F5', // Light gray for extra contrast if needed
      },
      fontSize: {
        // Fluid typography using clamp
        xs: ['clamp(0.75rem, 1vw, 0.875rem)', { lineHeight: '1rem' }],
        sm: ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1.25rem' }],
        base: ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.5rem' }],
        lg: ['clamp(1.125rem, 1.8vw, 1.25rem)', { lineHeight: '1.75rem' }],
        xl: ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.75rem' }],
        '2xl': ['clamp(1.5rem, 2.5vw, 1.875rem)', { lineHeight: '2rem' }],
        '3xl': ['clamp(1.875rem, 3vw, 2.25rem)', { lineHeight: '2.25rem' }],
        '4xl': ['clamp(2.25rem, 4vw, 3rem)', { lineHeight: '2.5rem' }],
        '5xl': ['clamp(3rem, 5vw, 3.75rem)', { lineHeight: '1' }],
        '6xl': ['clamp(3.75rem, 6vw, 4.5rem)', { lineHeight: '1' }],
      },
      borderRadius: {
        // Rounded corners
        none: '0px',
        sm: '0.125rem', // 2px
        DEFAULT: '0.25rem', // 4px
        md: '0.375rem', // 6px
        lg: '0.5rem',   // 8px
        full: '9999px', // Fully rounded
      },
      height: {
        'inputBar': '100px',
        'navbar': '64px',
        'sidebar': 'calc(100vh - 64px)',
        'sidebarMobile': 'calc(100vh - 56px)',
        'sidebarActive': 'calc(100vh - 48px)',
      }
    },
  },
  plugins: [],
} satisfies Config;
