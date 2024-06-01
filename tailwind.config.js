/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				blueprimary: "#376AED",
				textprimary: "#0D253C",
				textsecondary: "#2D4379",
				textgray: "#CDCDCD",
				bggray: "#EFF4FF",
				bordergray: "#D6D6D6",
			},
		},
	},
	plugins: [require("daisyui", "@tailwindcss/typography")],
	daisyui: {
		themes: [],
	},
}
