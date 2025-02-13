import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-gray-custom': '#323232',
        'light-gray-custom': '#575757',
        'box-grey-border': '#a5a5a5',
        'box-grey-bg': '#f4f4f4',
        'primary-color': '#f7f7f7',
        'person-bg-color': 'rgb(189, 189, 189)',
        'close-navbar': '#7cb900',
        'primary-text-color': '#232323',
        'navbar-hr-color': 'rgba(0, 0, 0, 0.14)',
        'green-color': '#8cc714',
        'light-green-color': 'rgba(197, 227, 137, 0.5)',
        'primary-btn-hover': '#474747',
        'secondary-btn-hover': '#e0e0e0',
        'light-black-color': '#23232333',
        'view-btn': '#edf8f5',
        'view-btn-hover': '#def5ef',
        'view-btn-icon': '#4cbc9a',
        'edit-btn': '#e9e9e9',
        'edit-btn-hover': '#e2dede',
        'delete-btn': '#ffeff0',
        'delete-btn-icon': '#ff606b',
        'delete-btn-hover': '#fbdfe1',
        'calendar-color': '#e8f8ca',
        'week-day-color': '#939393'
      },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(135deg, #153677, #4e085f)'
      // }
    },
  },
  plugins: [],
} satisfies Config;
