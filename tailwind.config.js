/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0f2027',
                    800: '#203a43',
                    700: '#2c5364'
                },
                primary: {
                    DEFAULT: '#667eea',
                    dark: '#5a6fd6',
                    light: '#764ba2'
                }
            },
            animation: {
                'spin-slow': 'spin 10s linear infinite',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
