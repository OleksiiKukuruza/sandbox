/* global process require */
if (process.env.NODE_ENV === 'production') {
    require('babel-polyfill');
}
