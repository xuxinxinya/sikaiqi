console.log("加载成功");

//配置我们要引入的模块的路径 jquery 遵从AMD规范， parabola.js不支持AMD规范
require.config({
  paths: {
    jquery: "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    parabola: "parabola",
    index5: "index5",
  },
  //jquery-cookie 依赖于jquery
  shim: {
    //设置依赖关系
    "jquery-cookie": ["jquery"],
    //某一个模块，不遵从AMD
    parabola: {
      exports: "_",
    }
  }
})


require(["index5"], function(index5){
    index5.index5();
})