'use strict'

const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const resolve = dir => path.join(__dirname, '.', dir)

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: "./src/slider-bar.js",
  output: {
    path: resolve("dist"), // 输出目录
    filename: "slider.bundle.js", // 输出文件
    libraryTarget: "umd", // 采用通用模块定义
    library: "SliderBar", // 库名称
    libraryExport: "default", // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
    globalObject: "this" // 兼容node和浏览器运行，
  },
  devtool: "#source-map",
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [resolve("src"), resolve("test")],
        options: {
          formatter: require("eslint-friendly-formatter")
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader" 
        ]
      }
    ]
  },
  plugins: isProd
    ? [
        new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
            warnings: false,
            mangle: true
          },
          sourceMap: true
        })
      ]
    : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
      ]
};