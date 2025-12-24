# plugin
loader的功能定位是转换代码，而一些其他的操作难以使用loader完成，比如：
    - 当webpack生成文件时，顺便多生成一个说明文件
    - 当webpack编译启东市，控制台输出一句话表示webpack启动了
    - 当xxxx时，xxxx

这种类似的功能需要把功能嵌入到webpack的编译流程（编译生命周期）中，而这种事情的实现是依托于plugin的。


plugin的本质就是一个带有apply方法的对象：
```javascript
const MyPlugin = {
    apply(compiler) {}
}
```
通常，习惯上，我们会将该对象写成构造函数的模式：
```javascript
class MyPlugin {
    //apply函数会在初始化阶段，创建plugin对象时调用
    apply(compiler) {
        //在这里注册事件
    }
}
```
使用的时候通过new一个实例对象，配置在webpack的plugins属性中：
```javascript
module.exports = {
    plugins: [
        new MyPlugin()
    ]
}
```

## compiler
compiler对象是在初始化阶段构建的，整个webpack打包期间只有一个compiler对象，后续完成打包工作的是compiler对象内部创建的compilation

apply方法会在创建好compiler对象后调用，并向方法中传入一个compiler对象。

compiler对象提供了大量的钩子函数（hooks，可以理解为事件），plugin的开发者可以注册这些钩子函数，参与webpack的编译和生成。
你可以在apply方法中使用下面的代码注册钩子函数：
```javascript
class MyPlugin {
    apply(compiler) {
        compiler.hooks.事件名称.事件类型('MyPlugin', (compilation) => {})
    }
}
```
### 事件名称
即要监听的事件名，即钩子名，所有的钩子：
https://www.webpackjs.com/api/compiler-hooks/
### 事件类型
钩子类型，有同步和异步两种，同步钩子会阻塞后续代码执行，异步钩子不会阻塞后续代码执行，异步钩子会返回一个promise对象，表示异步操作完成。
事件类型：
    - tap：同步钩子
    - tapAsync：异步钩子
    - tapPromise：异步钩子，返回promise对象