const tsConfigPaths = require("tsconfig-paths");
const tsConfig = require("./tsconfig.json");

const baseUrl = "/home/node/app/build/";

tsConfigPaths.register({
  baseUrl: ".",
  paths: {
    "*": ["build/src/*", "node_modules/*"]
  },
});
