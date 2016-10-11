module.exports = {
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel', 'eslint'], exclude: /node_modules/}
        ]
    }
};
