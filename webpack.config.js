'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      __dirname + '/src/screens/index.js'
    ]
  },
  output: {
    path: __dirname + '/public/js/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-2']
      }
    }]
  },
// I don't have enough RAM on my ubuntu server to run this lmfao
//  plugins: [
//    new webpack.optimize.UglifyJsPlugin({
//      compress: { warnings: false }
//    })
//  ]
};
