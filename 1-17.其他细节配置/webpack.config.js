const { hash } = require('crypto');
const path = require('path');
const { library } = require('webpack');
module.exports = {
    mode:'development',
    devtool:'source-map',
    context:path.resolve(__dirname,'src'),//制定基础路径，影响入口和loaders的配置
    entry:{
        index:'./index.js',
        // a:'./a.js'
    },
    output:{
        path:path.resolve(__dirname,'target'),
        filename:'[name].js',
        // library:'abc',//作为库时，挂载到全局的变量名
        // libraryTarget:'var',//作为库时，输出的格式
    },
    // target:'node',//编译目标，默认是web，可以省略
    module:{
        // rules:[],//loader规则
        // noParse:/a\.js/,//a.js文件代码保持原样,不去解析a.js文件中的依赖关系，提高构建速度
    },
    resolve:{
        modules:['node_modules'],//require/import 引入模块的查找位置，默认值node_modules
        extensions:['.js','.json'],//webpack自动补全 模块的后缀名，默认值['.js','.json']
        alias:{
            '@':path.resolve(__dirname,'src'),//路径别名
        },
    },
    externals:{
        jquery:'$',
        lodash:'lodash'
    },
    stats:{
        colors:true,
        modules:true,
        hash:true,
    },

}