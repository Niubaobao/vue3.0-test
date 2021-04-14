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
    'plugins': [
        'vue'
    ],
    'rules': {
        // allow paren-less arrow functions 要求箭头函数的参数使用圆括号
        'arrow-parens': 0,
        // allow async-await 强制 generator 函数中 * 号周围使用一致的空格
        'generator-star-spacing': 0,
    }
}
