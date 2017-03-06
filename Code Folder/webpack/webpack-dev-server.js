const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const process = require('process');

const webpackConfig = require('./dev.config.js');

const host = '0.0.0.0';
const port = 3001;

const server = new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    hot: true,
    inline: true,
    lazy: false,
    historyApiFallback: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 300
    },
    stats: {
        colors: true
    }
});

server.listen(port, host, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening at ' + host + ':' + port);
    }
});

server.use(morgan(':date[iso] :method :url :response-time [s]'));

server.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});
