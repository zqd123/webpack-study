# webpack内置插件 

所有的webpack内置插件都作为webpack的静态属性存在的，使用下面的方式即可创建一个插件对象
```javascript
const webpack = require('webpack');
new webpack.DefinePlugin({});// webpack.插件名(options)
```
## DefinePlugin 
功能：全局常量定义插件，使用该插件通常定义一些常量值，例如：
```javascript
const webpack = require('webpack');
new webpack.DefinePlugin({
    PI: `Math.PI`, // PI = Math.PI
    VERSION: `"v1.0.0"`, // VERSION = "v1.0.0"
    DOMAIN: JSON.stringify('http://www.example.com'), // DOMAIN = "http://www.example.com"
}) 
```

## BannerPlugin 
功能：它可以为每个chunk生成的文件头部添加一行注释，一般用于添加作者、公司、版权等信息.
```javascript
const webpack = require('webpack');
new webpack.BannerPlugin({
    banner: `
    Copyright (c) ${new Date().getFullYear()}
    author: xxx
    license: MIT
    `
})
```

## ProvidePlugin 
功能：自动加载模块，而不必到处使用import或require导入,避免重复导入常用库如jQuery、lodash。
```javascript
const webpack = require('webpack');
new webpack.ProvidePlugin({
    $: 'jquery',
    _: 'lodash',
})
```
然后在代码中就可以直接使用$和_了。
```javascript
const r1 = $('#item');
const r2 = _.drop([1, 2, 3, 4],2);
```