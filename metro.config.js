const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver = config.resolver || {};
config.resolver.assetExts = config.resolver.assetExts || [];
// Ensure Metro treats .wasm files as assets so it doesn't try to parse them as JS
if (!config.resolver.assetExts.includes('wasm')) {
  config.resolver.assetExts.push('wasm');
}

module.exports = config;
