/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        backgroundWhite: '#ebebeb'
      },
      fontFamily: {
        'custom': ['UbuntuMono', 'sans-serif']
      }
    },
  },
  plugins: [],
}
