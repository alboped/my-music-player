var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app/router.js',
	output: {
		path: path.resolve(__dirname, './resources/dist'),
		publicPath: './dist/',
		filename: 'build.js'
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue'
		}, {
			test: /\.js$/,
			loader: 'babel',
			exclude: /node_modules/
		}, {
			test: /\.scss$/,
			loader: 'style!css!autoprefixer?browsers=last 2 versions!sass',
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			loader: 'style!css'
		}, {
			test: /\.json$/,
			loader: 'json'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	plugins: [
		new htmlWebpackPlugin({
			title: 'MyMusicPlayer',
			filename: '../index.html',
			template: './src/index.html',
			cache: true,
			showErrors: true
		})
	]
}