const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    home:"./src/index.js",
    a:"./src/a.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].[chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./public/index.html",//模板
      chunks:["home"],//包含的chunk名称
      filename: "home.html",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",//模板
      chunks:["a"],//包含的chunk名称   
      filename: "a.html",
    }),
  ],
};
