// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('cjs');

// Define the configuration object
const config = {
    resolver: {
        assetExts: [...defaultConfig.resolver.assetExts],
    },
    // Add any other configuration options if needed
};

module.exports = config;
