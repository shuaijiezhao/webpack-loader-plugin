const path = require('path');
const CopyrightWebpackPlugin = require('./src/plugins/copyright-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  resolveLoader: {
    modules: ['node_modules', './src/loaders']
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              use: { 
                  loader: 'replaceLoader',
                  options: {
                      params: 'replaceString' 
                  }
                }
          }
      ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new CopyrightWebpackPlugin({
      name: 'hello'
  })]
};