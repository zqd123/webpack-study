const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "[name].[chunkhash:5].js",
  },
  plugins: [
    new CleanWebpackPlugin()
],
};
