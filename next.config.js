/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
		});

		if (!options.dev && !options.isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			});
		}

		return config;
	},
	productionBrowserSourceMaps: true,
};
