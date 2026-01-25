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
  module: {
    rules: [
      // {
      //   test: /\.png|jpg|gif|jpeg|svg$/,
      //   use: [
      //     {
      //       loader:"file-loader",
      //       options:{
      //         name:"assets/[name].[hash:5].[ext]",//指定输出的文件名
      //       }
      //     }
      //   ],
      // },
      {
        test: /\.png|jpg|gif|jpeg|svg$/,
        use: [
          {
            loader:"url-loader",
            options:{
              limit: 5 * 1024,//小于5kb的图片转为base64,否则调用file-loader处理，下面可以添加file-loader配置
              name:"assets/[name].[hash:5].[ext]",//指定file-loader输出的文件名
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), 
    new HtmlWebpackPlugin({
      template: "./public/index.html",//模板
    }),
  ],
  devServer: {
    port: 8080,
    open: true,
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     changeOrigin: true,//更改请求头中的Host和Origin为target
    //   },
    // },
    devMiddleware: {
      stats:{//控制台输出信息和webpack中的stats配置类似
        modules: false,
      }
    },
  },
};
