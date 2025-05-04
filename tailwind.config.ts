import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_sections/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_lib/**/*.{js,ts,jsx,tsx,mdx}',
        './src/_hooks/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['var(--font-display)'],
                heading: ['var(--font-heading)'],
                decoration: ['var(--font-decoration)'],
            },
            colors: {
                background: 'var(--background)',
                backgroundLight: 'var(--background-light)',
                foregroundWhite: 'var(--foreground-white)',
                foregroundGrey: 'var(--foreground-grey)',
                foregroundDark: 'var(--foreground-dark)',
            },
            spacing: {
                xsSpacing: '20px',
                mdSpacing: '40px',
                lgSpacing: '150px',
            },
        },
    },
    plugins: [],
} satisfies Config;
