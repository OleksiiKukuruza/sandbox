const path = require('path');
const webpack = require('webpack');

module.exports = {
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
            {test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js'
        })
    ],
    devtool: 'source-map'
};
