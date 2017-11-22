const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const VENDOR_LIBS = [
    'react', 'react-dom', 'react-redux', 'react-bootstrap', 'react-router-dom',
    'redux', 'redux-promise', 'redux-form',
    'lodash', 'axios',
]

const bundleDir = './src/main/resources/public'


module.exports = {
    entry: {
        bundle: './src/main/resources/js/index.js',
        vendor: VENDOR_LIBS
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
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
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"'
                }),
            },
        ],
    },

    plugins: [
        new CleanWebpackPlugin([bundleDir]),
        new ExtractTextPlugin({filename: 'style.css', allChunks: true}),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/main/resources/templates/index.html'
        }),

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
        new webpack.LoaderOptionsPlugin({minimize: true}),
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
}


