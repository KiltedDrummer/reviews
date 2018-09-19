const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: __dirname + '/client/App.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["@babel/preset-env","@babel/preset-react"]
        },
      }
    ]   
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  },
  mode: 'development'
};
