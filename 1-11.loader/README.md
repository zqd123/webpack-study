# loader

webpack做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到自定的文件中。
更多的功能需要借助webpack loader和webpack plugin完成。

webpack loader： loader本质上是一个函数，它的作用是将某个源码字符串转换成另一个源码字符串返回。

loader函数，将在模块解析的过程中被调用，以得到最终的源码。