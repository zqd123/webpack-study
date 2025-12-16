// 该对象提供了大量路径处理的函数
const path = require('path');
const result = path.resolve('./','child','abc','123');
console.log(result); // /Users/zhangqdmacmini/Documents/study/webpack-study/1-9.入口和出口/child/abc/123


//当前js文件所在目录
const resultDirname = path.resolve(__dirname,'child','abc','123');
console.log(resultDirname); // /Users/zhangqdmacmini/Documents/study/webpack-study/1-9.入口和出口/node/child/abc/123