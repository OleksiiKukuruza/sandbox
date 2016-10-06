const webpackConfig = require('./webpack.config.karma');

module.exports = (config) => {
    config.set({
        files: [{pattern: 'src/**/*.spec.js', watched: false}],
        preprocessors: {'src/**/*.spec.js': ['webpack']},
        webpack: webpackConfig,
        webpackMiddleware: {noInfo: true},
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['mocha', 'coverage']
    });
};
