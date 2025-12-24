const MyPlugin = require("./plugins/MyPlugin");
module.exports = {
  mode: "development",
  devtool: "source-map",
  watch: true,
  plugins: [
    new MyPlugin(),
  ],
}; 