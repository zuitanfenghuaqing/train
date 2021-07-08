module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        commonjs: true
    },
    parserOptions: {
        "ecmaVersion": 'latest',
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "parser": "babel-eslint"
    },
    plugins: ['react'],
    rules: {
        'semi': 0,
        'no-empty': 0,
        "comma-dangle": 1,
        "no-eval": 1,
        "no-continue": 0
    }
};