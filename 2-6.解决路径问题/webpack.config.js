const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home:"./src/index.js",
  },
  output: {
    path: __dirname + "/dist",
    filename: "scripts/[name].[chunkhash:5].js",
    // publicPath: "/ ",
  },
  module: {
    rules: [
      {
        test: /\.png|jpg|gif|jpeg|svg$/,
        use: [
          {
            loader:"file-loader",
            options:{
              name:"imgs/[name].[hash:5].[ext]",//指定输出的文件名
            }
          }
        ],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./public/index.html",//模板
      filename: "html/index.html",
    }),
  ],
  devServer: {
    port: 8080,
    // devMiddleware: {
    //   publicPath: "/html/",
    // },
  },
};
