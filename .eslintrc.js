module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        "node": true,
        "commonjs": true,
        "amd": true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        indent: 'off',
        'vue/no-multiple-template-root': 'off',
        '@typescript-eslint/indent': ['error', 2],
        "prettier/prettier": "error"
    },

}
