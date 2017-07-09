const debug = process.env.NODE_ENV !== 'production';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'react', 'react-dom', 'react-redux', 'react-bootstrap',
    'redux', 'redux-promise', 'redux-form',
    'lodash', 'axios',
];

const resources = 'src/main/resources/';

module.exports = {
    entry: {
        bundle: './src/main/resources/js/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/public'),
        filename: '[name].[hash].js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]'
                ),
            },
        ],
    },

    devServer: {
        historyApiFallback: true
    },

    devtool: debug ? 'inline-sourcemap' : null,

    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/main/resources/templates/index.html'
        })

    ],
};
