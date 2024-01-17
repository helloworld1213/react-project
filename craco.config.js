const path = require("path");
const resolve = (pathname) => path.resolve(__dirname, pathname);

const CracoLessPlugin = require("craco-less");

module.exports = {
  //配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  //webpack配置
  webpack: {
    alias: {
      // "@": path.resolve(__dirname, "src"),
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },
  },
};
