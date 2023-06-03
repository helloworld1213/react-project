const path = require("path");
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
      "@": path.resolve(__dirname, "src"),
    },
  },
};
