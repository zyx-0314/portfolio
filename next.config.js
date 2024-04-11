// module.exports = {
// 	webpack: (config, { isServer }) => {
// 		// Add your custom Webpack configurations here
// 		if (!isServer) {
// 			config.optimization.usedExports = true; // Enable tree shaking
// 		}

// 		return config;
// 	},
// };

module.exports = {
	reactStrictMode: true,
	images: {
		domains: ['media.licdn.com'],
	},
};
