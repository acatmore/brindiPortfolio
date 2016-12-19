var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel',
          query: {
            presets: [
              "babel-preset-react",
              "babel-preset-es2015"
            ]
          }
        },
      ]
    },
	resolve: {
		extensions: ['', '.js', '.jsx', '.es6']
	}
};
