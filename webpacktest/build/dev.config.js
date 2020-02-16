const webpackMerge = require('webpack-merge');
const baseconfig = require('./base.config');

module.exports = webpackMerge(baseconfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
});