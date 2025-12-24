module.exports = class MyPlugin {
  apply(compiler){
    console.log('插件运行了');
    // 在这里注册事件钩子
    compiler.hooks.done.tap('MyPlugin', (compilation) => {
      console.log('构建完成');
    });
    
  }
}