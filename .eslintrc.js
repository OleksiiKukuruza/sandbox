module.exports = {
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        browser: true,
        mocha: true
    },
    rules: {
        indent: [2, 4],
        'no-underscore-dangle': 2,
        'quote-props': [2, 'as-needed'],
        quotes: [2, 'single'],
        'eol-last': [2, 'always']
    }
}
