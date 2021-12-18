module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				pardubice: {
					default: '#B70106',
					dark: '#A90003',
				},
				background: {
					default: '#F6F7FA',
				},
				border: {
					default: '#F2EDED',
				},
				component: {
					dark: '#EFF0F0',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
