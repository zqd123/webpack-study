file-loader：生成的依赖的文件到输出目录，然后将模块设置为：一个导出路径
将代码中的 import/require()导入的文件解析为 URL，并将文件输出到目录。
```javascript
function loader(source) {
    //source: 文件内容（图片内容buffer）
    //1.生成一个具有相同文件内容的文件到输出目录
    //2.返回一段代码：export default '文件地址'
}
```

url-loader：将依赖的文件转换为：导出一个base64格式的字符串
```javascript
function loader(source) {
    //source: 文件内容（图片内容buffer）
    //1.根据bugger生成一个base64字符串
    //2.返回一段代码：export default 'base64字符串'
}
```