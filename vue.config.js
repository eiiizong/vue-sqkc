/*
vue-cli 3.x 配置文件
*/
const path = require("path");

module.exports = {
  // 应用部署路径
  publicPath: process.env.NODE_ENV === "production" ? "/test/vue/" : "/",
  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: "dist",
  assetsDir: "public"
};
