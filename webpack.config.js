const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Treat .wasm files as resources so the bundler emits them and returns a URL
  config.module.rules.push({
    test: /\.wasm$/,
    type: 'asset/resource',
  });

  // Enable async WebAssembly support in webpack
  config.experiments = config.experiments || {};
  config.experiments.asyncWebAssembly = true;

  // Ensure resolver recognizes .wasm
  config.resolve.extensions = config.resolve.extensions || [];
  if (!config.resolve.extensions.includes('.wasm')) {
    config.resolve.extensions.push('.wasm');
  }

  return config;
};
