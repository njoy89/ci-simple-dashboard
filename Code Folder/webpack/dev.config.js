var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            'webpack-dev-server/client?http://0.0.0.0:3001',
            'webpack/hot/dev-server',
            './client/index.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, '../public/'),
        filename: 'main.bundle.js',
        publicPath: 'http://localhost:3001/public/'
    },
    module: {
        loaders: [
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', [
                    'css',
                    'postcss',
                    'sass'
                ])
            }, {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['> 1%']
        })
    ],
    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};
