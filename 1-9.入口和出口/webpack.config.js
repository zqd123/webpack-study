const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry:{
    main:'./src/index.js',//属性名：chunk的名称，属性值：入口模块
    other:'./src/other.js',
    multiInput:['./src/index.js','./src/other.js']//多入口，生成一个chunk，包含多个模块，按配置顺序执行
  },
  output: {
    path: path.resolve(__dirname, 'target'),//必须配置一个绝对路径，表示资源放置的位置
    filename: 'js/[name].[chunkhash:5].js'//配置合并后的js文件名规则，可以配置路径；chunkhash解决浏览器缓存问题。
  }
};