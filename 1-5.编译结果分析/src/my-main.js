//合并两个模块
// ./src/a.js
// ./src/index.js
(function (modules) {
    //moduleId就是模块路径
    function require(moduleId){}
    //执行入口模块
    require("./src/index.js");//require函数相当于是运行一个模块，并得到模块导出结果
})({
  "./src/a.js": function (module, exports) {
    console.log("module a");
    module.exports = "a";
  },
  "./src/index.js": function (module, exports, require) {
    console.log("index module");
    const a = require("./src/a.js");
    console.log(a);
  },
});
