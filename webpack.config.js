var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
// var axios = require('axios');

module.exports = {
    context: path.join(__dirname, "src/main/resources/"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./js/index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            {
                test: /\.css/,
                loaders: ['style-loader', 'css-loader'],
                include: __dirname + '/src/main/resources/'
            }
        ],
    },



   output: {
        path: __dirname + "/src/main/resources/static",
        filename: "./index.min.js"
    },

    devServer: {
        hot: true,
        // proxy: {
        //     '/': {
        //         target: 'https://localhost:8080',
        //         secure: false,
        //     }
        // }
    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false}),
       ],
    // devtool : 'source-map'
};
