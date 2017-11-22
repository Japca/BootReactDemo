const path = require('path')
const webpack = require('webpack')
const bundleDir = './src/main/resources/public'

module.exports = {

    entry: {
        app: './src/main/resources/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, bundleDir),
        filename: 'bundle.js'

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
                use: [
                    'style-loader?sourceMap',
                    'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
                ]
            },
        ],
    },

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        inline: true,
        hot: true,
        contentBase: bundleDir,
        host: 'localhost',
        proxy: {
            '/': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}