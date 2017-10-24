var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/script/main.js',
	output: {
		path: path.resolve(__dirname, '/dist'),
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		inline: true
	},
	module: {
		rules: [{
			test: /(\.vue|\.js)$/,
			use: {
				loader: 'babel-loader'
			},
			exclude: /node_modules/
		}, {
			test: /\.css$/,
			use: [{
				loader: 'css-loader',
				options: {
					modules: true
				}
			}, {
				loader: 'style-loader'
			}, {
				loader: 'postcss-loader'
			}]
		}]
	},
	plugins: [
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template: __dirname + '/index.tmpl.html'
		})
	]
}