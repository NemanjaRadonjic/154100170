const rewireAliases = require("react-app-rewire-aliases");

const { paths } = require("react-app-rewired");

const path = require("path");

// add alias support to webpack config
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@images": path.resolve(__dirname, `${paths.appSrc}/images`),
    "@routes": path.resolve(__dirname, `${paths.appSrc}/Routes`),
  })(config, env);
  return config;
};
