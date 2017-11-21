const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-redux', 'react-bootstrap', 'react-router-dom',
    'redux', 'redux-promise', 'redux-form',
    'lodash', 'axios',
]

module.exports = {
    entry: {
        bundle: './src/main/resources/js/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/public'),
        filename: '[name].[hash].js'

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|node)/,
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
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: 'src/main/resources/public',
        proxy: {
            '/': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    },

    devtool: '#eval-source-map',

    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/main/resources/templates/index.html'
        })
    ],
}


if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#cheap-source-map'
    module.exports.plugins = (module.exports.plugins || module.plugins).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

