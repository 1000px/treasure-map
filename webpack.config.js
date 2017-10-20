import path from 'path'
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/script/main.js',
	output: {
		path: '/dist',
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
		}]
	}
}