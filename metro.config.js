const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");
const { withNativeWind } = require("nativewind/metro");
const { wrapWithReanimatedMetroConfig } = require("react-native-reanimated/metro-config");

// Set project root
const projectRoot = __dirname;

// Ambil config default dari Expo
const config = getDefaultConfig(projectRoot, {
    isCSSEnabled: true, // kalau memang kamu butuh ini
});

// Custom resolver path (kalau perlu)
config.resolver.nodeModulesPaths = [path.resolve(projectRoot, "node_modules")];

// Bungkus dengan NativeWind
const nativeWindConfig = withNativeWind(config, { input: './global.css' });

// Bungkus lagi dengan Reanimated
module.exports = wrapWithReanimatedMetroConfig(nativeWindConfig);
