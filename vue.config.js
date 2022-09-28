const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // publicPath: "./",
  productionSourceMap: false,
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        store: "@/store",
        views: "@/views",
      },
    },
  },
  lintOnSave: false,
});
