const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home: "./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "scripts/[name].[chunkhash:5].js",
    publicPath: "/", //静态资源引用的根路径
  },
  module: {
    rules: [
      {
        test: /\.png|jpg|gif|jpeg|svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "imgs/[name].[hash:5].[ext]", //指定输出的文件名
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html", //模板
      filename: "html/index.html",
    }),
    new webpack.DefinePlugin({
      PI: `Math.PI`, // PI = Math.PI
      VERSION: `"v1.0.0"`, // VERSION = "v1.0.0"
      DOMAIN: JSON.stringify("http://www.example.com"), // DOMAIN = "http://www.example.com"
    }),
    new webpack.BannerPlugin({
      banner: `
        Copyright (c) ${new Date().getFullYear()}
        author: xxx
        license: MIT
        `,
    }),
    new webpack.ProvidePlugin({
      $: ["jquery", "default"], // jQuery 4.0.0使用ES module导出，需要用数组语法["jquery", "default"]来指定默认导出
      _: "lodash",
    }),
  ],
  devServer: {
    port: 8080,
    // open: true,
    devMiddleware: {
      writeToDisk: true,
      index: "html/index.html", //指定默认打开的文件(根据HtmlWebpackPlugin的filename配置)
    },
  },
};
