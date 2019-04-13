const example = require("./echarts-example.js");
module.exports = function(type) {
  if (type == "pie") {
    require("echarts/lib/chart/pie");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
    require("echarts/lib/component/legendScroll");
    return example[type];
  } else {
    console.log("未传入type值");
  }
};
