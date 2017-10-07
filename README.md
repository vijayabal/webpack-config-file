# Webpack-config-file added in root folder

Webpack config helps us to do more configuration in webpack.
 
 Four major concepts are- Entry, Output, module, and plugin

1. Add more loader for css transpilation.
		
		>npm install css-loader style-loader --save-dev
		
2. Config file 

var path = require("path");
var webpack = require("webpack");


module.exports = {
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "bundle.js",
		publicPath:"/dist"
	},
	module:{
		rules:[
				{
						test: /\.css$/,
						use: [
							"style-loader",
							"css-loader"									
						]
				}				
		]
		
	},
	plugins:[
				new webpack.optimize.UglifyJsPlugin({
					//....
					
				})
	]
};
  
