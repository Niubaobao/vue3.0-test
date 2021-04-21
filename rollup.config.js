import babel from 'rollup-plugin-babel'

export default {
  input: './src/index/index.js',
  output: {
    format: 'umd', // 使用规范
    name: 'Vue',
    file: 'dist/vue.js', // 打包目录
    sourcemap: true //es5 ->es6
  },
  plugins: [
    babel({ //使用babel转换
      exclude: "node_modules/**"
    })
  ]
}