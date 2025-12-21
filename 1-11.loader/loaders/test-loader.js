module.exports = function (sourceCode) {
    //源代码sourceCode:  变量 a =1;
    //  console.log('test-loader运行了');
     const options = this.getOptions();// 获取loader的options参数
     const reg = new RegExp(options.changeVar, 'g');
    //  console.log(options)
    //  console.log(reg);
  return sourceCode.replace(reg, 'var');
};