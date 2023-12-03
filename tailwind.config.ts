import { Config } from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                notblack: '#1e1e1e',
            },
        },
    },
    plugins: [],
} as Config;
