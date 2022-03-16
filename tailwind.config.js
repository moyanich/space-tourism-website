module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				'barlow-regular': ["Barlow", "sans-serif"],
				'barlow': ["Barlow Condensed", "sans-serif"],
				'bellefair': ["Bellefair", "serif"]
			},
			fontSize: {
				'base15': '0.9375rem',
				'h1base': '5rem',
				'h1xl': '9.375rem',
				'h2xl': '6.25rem',
				'h3xl': '3.5rem',
				'h4xl': '2rem',
				'h5xl': '1.75rem',
			},
			letterSpacing: {
				wide2: '2.7px',
				h5wide: '0.29375rem',
			}
		},
		
		
	},
	plugins: [],
}
