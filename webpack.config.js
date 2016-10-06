const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        vendor: path.resolve('./vendor.js'),
        app: path.resolve('./index.js')
    },
    output: {
        publicPath: '/dist',
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel'}
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(process.env.NODE_ENV)}
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],
    devtool: 'source-map'
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        })
    );
}

module.exports = config;
