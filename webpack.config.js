var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    pathInfo: true,
    filename: '[name].bundle.js',
    // filename: 'bundle.js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  watch: true,
  resolve: {
    extensions: ['','.ts', '.js'],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/assets',
        to:'./assets'
      }
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    }),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' },
    ]
  },
  node: {
    fs: 'empty'
  },
  devtool: 'source-map',
  externals: {
    'phaser': 'Phaser'
  }
}