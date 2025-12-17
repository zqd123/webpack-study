# 入口和出口最佳实践

## 一个页面一个js

源码结构：
```
｜-- src
    ｜-- pageA  页面A的代码目录
        ｜-- index.js   页面A的入口js,require(common/utils.js)
        ｜-- ...
    |-- pageB   页面B的代码目录
        |-- index.js    页面B的入口js,require(common/utils.js)
        |-- ...
    |-- pageC    页面C的代码目录，虽然两个入口，但会合并成一个文件
        |-- main1.js    页面C的入口1,require(common/utils.js)
        |-- main2.js    页面C的入口2,require(common/utils.js)
        |-- ...
    |-- common   公共代码目录
        |-- utils.js   公共代码
        |--...
```
webpack配置：
```js
module.exports = {
    entry: {
        pageA: './src/pageA/index.js',
        pageB: './src/pageB/index.js',
        pageC: ['./src/pageC/main1.js', './src/pageC/main2.js']
    },
    output: {
        filename: '[name].[chunkhash].js',
    }
}
```
适用场景：
这种方式适用于页面之间的功能差异巨大，公共代码较少的情况，这种情况下，打包出来的最终代码不会有太多重复。

## 一个页面多个js

源码结构：
```
｜-- src
    ｜-- pageA  页面A的代码目录（引入other的chunk的js）
        ｜-- index.js   页面A的入口js,require(common/utils.js)
        ｜-- ...
    |-- pageB   页面B的代码目录（引入other的chunk的js）
        |-- index.js    页面B的入口js,require(common/utils.js)
        |-- ...
    |-- other    和pageA、pageB功能完全解偶的功能代码
        |-- index.js    入口js
        |-- ...
    ｜--common   公共代码目录
        |-- utils.js   公共代码
        |--...
```
webpack配置：
```js
module.exports = {
    entry: {
        pageA: './src/pageA/index.js',
        pageB: './src/pageB/index.js',
        other: './src/other/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
    }
}
```
适用场景：
    这种方式适用于页面之间有一些独立的功能，专门使用一个chunk抽离这部分js有利于浏览器更好的缓存这部分内容。
思考：
    为什么不使用多启动模块的方式？如下：
```js
module.exports = {
    entry: {
        pageA:['./src/pageA/index.js','./src/other/index.js'] 
        pageB: ['./src/pageB/index.js','./src/other/index.js']
    },
    output: {
        filename: '[name].[chunkhash].js',
    }
}
```
回答：无法缓存，增加网络传输量

## 单页应用
源码结构：
```
｜-- src
    ｜-- subFunc  子模块代码目录
        ｜-- index.js   require(common/utils.js)
        ｜-- ...
    |-- subFunc   子模块代码目录
        |-- index.js    require(common/utils.js)
        |-- ...
    ｜--common   公共代码目录
        |-- utils.js   公共代码
        |--...
    |-- index.js   入口js
    |-- index.html   入口html
```
webpack配置：
```js
module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash].js',
    }
}
```