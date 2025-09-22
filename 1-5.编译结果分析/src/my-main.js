//合并两个模块
// ./src/a.js
// ./src/index.js
(function (modules) {
  //缓存导出的模块结果
  const moduleExports = {};
    //moduleId就是模块路径
    function __webpack_require(moduleId){
      //如果模块已经被加载过了，就直接返回缓存的结果
      if(moduleExports[moduleId]){
        return moduleExports[moduleId]
      }
      const func = modules[moduleId]
      const module={exports:{}}
      func(module, module.exports, __webpack_require)
      const result = module.exports
      //缓存模块结果
      moduleExports[moduleId] = result
      return result
    }
    //执行入口模块
    return __webpack_require("./src/index.js");//require函数相当于是运行一个模块，并得到模块导出结果
})({
  "./src/a.js": function (module, exports) {
    console.log("module a");
    module.exports = "a";
  },
  "./src/index.js": function (module, exports, __webpack_require) {
    console.log("index module");
    const a = __webpack_require("./src/a.js");
    console.log(a);
  },
});
