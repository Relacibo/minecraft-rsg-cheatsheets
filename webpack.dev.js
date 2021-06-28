const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        port: 8080,
        hot: true,
        liveReload: true,
    },
});