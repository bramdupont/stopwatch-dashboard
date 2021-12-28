const plugin = require('tailwindcss/plugin')

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'primary': ['"Manrope"', 'sans-serif']
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function({ addBase, theme }) {
            addBase({
                'h1': { fontSize: theme('fontSize.3xl') },
                'h2': { fontSize: theme('fontSize.2xl') },
                'h3': { fontSize: theme('fontSize.xl') },
            });
        }),
        plugin(function({ addComponents }) {
            addComponents({
                '.alert': {
                    padding: '0.8rem',
                    margin: '2em auto',
                    opacity: '0.9',
                    textAlign: 'center',
                    width: '50%',
                },
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '1400px',
                    },
                    '@screen md': {
                        maxWidth: '1400px',
                    },
                    '@screen lg': {
                        maxWidth: '1400px',
                    },
                    '@screen xl': {
                        maxWidth: '1400px',
                    },
                }
            })
        })
    ],
}
