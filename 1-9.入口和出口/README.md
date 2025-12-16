
路径：./ 
1.模块化代码中，比如require('./main.js')，表示当前js文件所在目录
2.在node路径处理中，“./”表示node运行目录(项目根目录)，而不是当前js文件所在目录
3.在命令行中，比如node ./app.js，表示当前命令行所在目录(项目根目录)

__dirname:所有情况下，都表示当前运行的js文件所在的目录，它是一个绝对路径


输出名称规则：
- name： chunk的name（推荐和chunkhash组合使用）
- hash: 总的资源hash（不推荐）
- chunkhash: chunk的hash（推荐）
- id: chunk的id（不推荐）