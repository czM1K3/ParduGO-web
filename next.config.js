/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	webpack(config, options) {
		config.module.rules.push({
			test: /\.graphql$/,
			exclude: /node_modules/,
			use: [options.defaultLoaders.babel, { loader: 'graphql-let/loader' }],
		});
		return config;
	},
	productionBrowserSourceMaps: true,
};
