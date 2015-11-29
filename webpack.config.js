'use strict';

var webpack = require('webpack');
var path = require('path');
var production = process.env.NODE_ENV === 'production';

module.exports = {
    devtool: production ? null : 'eval',

    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'jsx?harmony'],
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react','es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ],
        noParse: [/react(-with-addons)?\.min\.js/]
    },

    output: {
        path: path.join(__dirname, 'static'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },

    entry: production ? [
        './src/index.js'
    ] : [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/index.js'
    ],

    plugins: production ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    node: {
        fs: 'empty',
        tls: 'empty',
        net: 'empty',
        dns: 'empty',
        console: production
    }
};
