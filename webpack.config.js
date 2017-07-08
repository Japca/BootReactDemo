const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src/main/resources/'),
    entry: './js/index.js',
    output: {
        path: __dirname + '/src/main/resources/static',
        filename: './index.min.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['transform-class-properties'],
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ),
            },
        ],
    },

    devServer: {
        historyApiFallback: true
    },

    devtool: debug ? 'inline-sourcemap' : null,

    plugins: [
        new ExtractTextPlugin('style.css')
    ],
};
