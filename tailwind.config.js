module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: require('tailwindcss/colors')
    },
    variants: {
        extend: {}
    },
    plugins: [require('@tailwindcss/typography'), require('tailwind-hamburgers')]
};
