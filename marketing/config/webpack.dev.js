const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packages = require('../package.json');

const devConfig = {
	mode: 'development',
	devServer: {
		port: 8081,
		historyApiFallback: {
			index: 'index.html',
		},
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'marketing',
			filename: 'indexEntry.js',
			exposes: {
				'./MarketingApp': './src/bootstrap.js',
			},
			shared: packages.dependencies,
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

module.exports = merge(commonConfig, devConfig);
