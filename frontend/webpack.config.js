const path = require('path')
//const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: ['./client/index.js'], //'webpack-hot-middleware/client?reload=true', 
  output: {
    path: path.join(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],      
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
  ],
}