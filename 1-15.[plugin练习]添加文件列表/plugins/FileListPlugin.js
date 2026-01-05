module.exports = class MyPlugin {
  constructor(options){
    this.filename = options.filename || 'filelist.txt';
  }
  apply(compiler){
    console.log('插件运行了');
    // 在这里注册事件钩子
    compiler.hooks.done.tap('MyPlugin', (compilation) => {
      console.log('构建完成');
    });
    compiler.hooks.emit.tap('FileListPlugin', (compilation) => {
      console.log(compilation.assets);
      const str = Object.keys(compilation.assets).map(key => {
        return `文件名：${key}，大小：${compilation.assets[key].size()/1000}KB`
      }).join('\n');
      compilation.assets[this.filename] = {
        source: function() {
          return str;
        },
        size: function() {
          return str.length;
        }
      }
    })
    
  }
}