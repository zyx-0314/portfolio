const path = require('path');

module.exports = {
	mode: 'production', // or 'development'
	entry: './app/(root)/page.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	optimization: {
		usedExports: true, // Enable tree shaking
	},
};
