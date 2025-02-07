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
        'navbar-color': '#232323',
        'navbar-hr-color': 'rgba(0, 0, 0, 0.14)',
        'green-color': '#8cc714'
      },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(135deg, #153677, #4e085f)'
      // }
    },
  },
  plugins: [],
} satisfies Config;
