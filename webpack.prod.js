const { merge } = require('webpack-merge');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  plugins: [
      new HtmlWebpackPartialsPlugin({
        path: './src/html/body.html'
      })
  ],
});