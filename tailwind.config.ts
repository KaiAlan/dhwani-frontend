import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["var(--font-inter)", ...fontFamily.sans],
				hankenGrotesk: ["var(--font-hankenGrotesk)", ...fontFamily.sans],
				geistSans: ["var(--font-geist-sans)", ...fontFamily.sans],
				geistMono: ["var(--font-geist-mono)", ...fontFamily.sans]
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				tertiary: {
					DEFAULT: 'hsl(var(--tertiary))',
					foreground: 'hsl(var(--tertiary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			dropShadow: {
				'3xl': '3px 3px 3px rgba(0, 0, 0, 0.4)'
			},
			screens: {
				tablet: '640px',
				laptop: '1024px',
				desktop: '1280px',
				out: '1512px'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				popup: {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0'
					},
					'30%, 70%': {
						transform: 'translateY(0)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: '0'
					}
				},
				fadeInUp: {
					'0%': {
						transform: 'translateY(100%)',
						opacity: '0',
					},
					'100%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
				},
				fadeOutUp: {
					'0%': {
						transform: 'translateY(0)',
						opacity: '1',
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: '0',
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				popup: 'popup 2s ease-in-out forwards',
				fadeInUp: 'fadeInUp 0.5s ease-in-out forwards',
				fadeOutUp: 'fadeOutUp 0.5s ease-in-out forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;


// popup: 'popup 2s ease-in-out forwards'

// popup: {
// 	'0%': {
// 		transform: 'translateY(100%)',
// 		opacity: '0'
// 	},
// 	'30%, 70%': {
// 		transform: 'translateY(0)',
// 		opacity: '1'
// 	},
// 	'100%': {
// 		transform: 'translateY(-100%)',
// 		opacity: '0'
// 	}
// }