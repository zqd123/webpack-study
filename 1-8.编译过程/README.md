# 编译过程

## 抽象语法树
https://astexplorer.net/

## 编译过程

检查：模块./src/index.js未加载，开始加载

模块id：./src/index.js
代码：
require('./a.js');
require('./b.js');
console.log('index.js文件被加载了');

AST语法分析->树形遍历，找到所有依赖

index.js模块中dependencies依赖数组：['./src/a.js','./src/b.js']

转换后代码：
__webpack_require('./src/a.js');
__webpack_require('./src/b.js');
console.log('index.js文件被加载了');


记录：
模块id：./src/index.js
代码：
__webpack_require('./src/a.js');
__webpack_require('./src/b.js');
console.log('index.js文件被加载了');


检查：模块./src/a.js未加载，开始加载
模块id：./src/a.js
代码：
require('./b.js')
console.log('a.js文件被加载了');

AST语法分析->树形遍历，找到所有依赖

index.js模块中dependencies依赖数组：['./src/b.js']

转换后代码：
__webpack_require('./src/b.js');
console.log('a.js文件被加载了');

记录：
模块id：./src/b.js
代码：
__webpack_require('./src/b.js');
console.log('a.js文件被加载了');

检查：模块./src/b.js未加载，开始加载
模块id：./src/b.js
代码：
console.log('b.js文件被加载了');

转换后代码：
console.log('b.js文件被加载了');

记录：
模块id：./src/b.js
代码：
console.log('b.js文件被加载了');


检查：模块./src/b.js已加载，结束


