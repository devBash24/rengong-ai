import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors (based on the earlier color scheme)
      colors: {
        primary: '#007BFF',        // Vibrant Blue
        secondary: '#20C997',      // Soft Teal
        accent: '#FFC107',         // Golden Yellow
        error: '#DC3545',          // Soft Red
        success: '#28A745',        // Light Green
        text: '#343A40',           // Charcoal Gray
        background: '#F8F9FA',     // Cool White
        'background-alt': '#D9D9D9', // Light Gray
        'background-secondary': '#f5f5f5', // Lighter Gray
      },
      fontSize: {
        // Responsive font sizes
        xs: ['0.75rem', { lineHeight: '1rem' }],   // Small text
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // Slightly larger
        base: ['1rem', { lineHeight: '1.5rem' }],  // Default
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // Large text
        xl: ['1.25rem', { lineHeight: '1.75rem' }],  // Larger
        '2xl': ['1.5rem', { lineHeight: '2rem' }],   // Subheading
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // Headings
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],  // Hero Text
        '5xl': ['3rem', { lineHeight: '1' }],         // Big Headlines
        '6xl': ['3.75rem', { lineHeight: '1' }],      // Huge Titles
      },
      screens: {
        // Breakpoints for responsive design
        xs: '480px',   // Extra small screens
        sm: '640px',   // Small screens
        md: '768px',   // Medium screens (tablets)
        lg: '1024px',  // Large screens (desktops)
        xl: '1280px',  // Extra large screens
        '2xl': '1536px', // XXL screens
      },
      spacing: {
        // Custom spacing scale
        0: '0px',
        1: '0.25rem',  // 4px
        2: '0.5rem',   // 8px
        3: '0.75rem',  // 12px
        4: '1rem',     // 16px
        5: '1.25rem',  // 20px
        6: '1.5rem',   // 24px
        8: '2rem',     // 32px
        10: '2.5rem',  // 40px
        12: '3rem',    // 48px
        16: '4rem',    // 64px
        20: '5rem',    // 80px
        24: '6rem',    // 96px
        32: '8rem',    // 128px
        40: '10rem',   // 160px
        48: '12rem',   // 192px
        56: '14rem',   // 224px
        64: '16rem',   // 256px
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
      height:{
        'inputBar': '100px',
        'navbar': '64px',
        'sidebar': 'calc(100vh - 64px)',
        'sidebarMobile': 'calc(100vh - 56px)',
        'sidebarActive': 'calc(100vh - 48px)',


      }
    },
  },

  plugins: [],
};
export default config;
