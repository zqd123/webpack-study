# html-webpack-plugin
https://www.npmjs.com/package/html-webpack-plugin

原理：
插件emit
    利用fs模块生成一个页面文件
    在文件的合适位置添加一个script元素
    元素的src路径引用打包后的js