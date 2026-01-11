# 其他细节配置
## context
context: path.resolve(__dirname, 'app')
该配置会影响入口和loaders的解析，入口和loaders的相对路径会以context的配置作为基准路径，这样，你的配置会独立于CWD（current working directory当前执行路径）。

## output

  ### library
  library: '[name]'
  这样一来，打包后的结果中，会将自执行函数的执行结果暴露给window对象下的[name]变量。比如jquery向外暴露的$变量.
  ### libraryTarget
  libraryTarget: 'var'
  该配置可以更加精细的控制如何暴露入口包的导出结果。
  ‘var’：默认值，暴露给一个普通变量
  ‘window’：暴露给window对象的一个属性
  ‘this’：暴露给this的一个属性
  ‘global’：暴露给global的一个属性，node环境
  ‘commonjs’：暴露给exports的一个属性
  其他：https://www.webpackjs.com/configuration/output#outputlibrarytarget

## target
target: 'web'//默认值
设置打包结果最终要运行的环境，常用值有：
'web'：默认值，打包结果运行在浏览器中
'node'：打包结果运行在node中
其他：https://www.webpackjs.com/concepts/targets/#root

## module.noParse
noParse: /jquery/
不解析（AST抽象语法树解析）正则表达式匹配的模块，通常用它来忽略那些大型的单模块库，也就是模块库不再依赖其他模块，也就是文件中 应该含有import, require等函数（例如jquery）；忽略后，可以提高构建性能。

## resolve
resolve的相关配置主要用于控制模块的解析过程

### modules
```javascript
modules：['node_modules'] //默认值
```
当模块解析时，如果遇到导入语句，require('test')，webpack会从下面的位置寻找依赖的模块：
1.当前目录下的node_modules目录
2.上级目录下的node_modules目录
3. 。。。

### extensions
```javascript
extensions: ['.js', '.json'] //默认值
```
当模块解析时，遇到无后缀的导入语句，例如require('test')，webpack会尝试添加这些后缀去匹配模块。
- test.js
- test.json

### alias
```javascript
alias: {
  '@': path.resolve(__dirname, 'src'),
  '_': __dirname,
}
```
有了alias（别名）后，导入语句中可以使用配置的别名，例如：require('@/test')，webpack会自动将@映射为path.resolve(__dirname, 'src')，并解析该路径下的模块。
在大型系统中，源码结构往往比较深和复杂，别名配置可以让我们更加方便的导入依赖。

## externals

```javascript
externals: {
  jquery: '$',
  lodash: '_'
}
```
从最终的bundle中排除掉配置的的源码，例如，入口模块是：
```javascript
// index.js
require('jquery');
require('lodash');
```
生成的bundle是：
```javascript
(()=> {
  //...
})({
  "./src/index.js": function(module, exports, __webpack_require__) {
    __webpack_require__(/*! jquery */ "jquery");
    __webpack_require__(/*! lodash */ "lodash");
  },
  "jquery": function(module, exports) {
    // jquery的大量源码
  },
  "lodash": function(module, exports) {
    // lodash的大量源码
  }
})
```
配置externals后，生成的bundle是：
```javascript
(()=> {
  //...
})({
  "./src/index.js": function(module, exports, __webpack_require__) {
    __webpack_require__(/*! jquery */ "jquery");
    __webpack_require__(/*! lodash */ "lodash");
  },
  "jquery": function(module, exports) {
    module.exports = $;
  },
  "lodash": function(module, exports) {
    module.exports = _;
  }
})
```
这比较适用于一些第三方库来自外部CDN的情况，这样依赖，既可以在页面中使用CDN，又让bundle的体积变得更小，还不影响源码的编写。

## stats
stats控制的是构建过程中控制台的输出内容
