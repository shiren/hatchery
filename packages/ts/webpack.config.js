const baseConfig = require('../webpack.config.base');

module.exports = (env, argv) => {
  let config = baseConfig(env, argv, __dirname);

  config.entry.push('./src/index.ts');

  return config;
};
