module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {},
    variants: {},
    plugins: [require('@tailwindcss/typography'), require('tailwind-hamburgers')]
};
