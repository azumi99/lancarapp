module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
        plugins: [// HARUS di paling bawah
            "react-native-reanimated/plugin", ["module-resolver", {
                root: ["./"],

                alias: {
                    "@": "./",
                    "tailwind.config": "./tailwind.config.js"
                }
            }]],
    };
};
