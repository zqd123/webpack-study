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
    filename: "[name].[chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./public/index.html",//模板
    }),
    new copyWebpackPlugin({
      patterns: [
        //复制静态资源的规则
        {
          from: "./public",
          to: "./",
          globOptions: {
            ignore: ["**/index.html"],
          },// 忽略的文件,解决控制台报错：Multiple assets emit different content to the same filename index.html
        },
      ],
    }),
  ],
};
