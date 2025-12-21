const path = require("path");
const TestLoader = require("./loaders/test-loader");
module.exports = {
  mode: "development",
  entry:{
    index: "./src/index.js",
    // index1: "./src/index1.js",
  },
  output: {
    filename: "[name].[chunkhash:5].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    // 模块的匹配规则
    rules: [
      //规则1
      {
        test: /index\.js$/i,//正则表达式，匹配模块的路径
        use: [
          {
            loader:'./loaders/test-loader.js',//加载器的路径，内部使用require('路径')
            options:{
              changeVar:'变量'
            }
          },//每个加载器是一个对象
          './loaders/loader1.js',
          './loaders/loader2.js'
        ],//匹配到了之后，使用哪些loader加载器处理  
      },
      //规则2
      {
        test: /\.js$/i,
        use: [
        //  "./loaders/loader1.js",
        //  "./loaders/loader2.js",
         "./loaders/loader3.js",
         "./loaders/loader4.js"
        ],
      }
    ],
  },
};
