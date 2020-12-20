const path = require('path');
const pathToInlineSvg = path.resolve(__dirname, '../src/loaders/assets/');
const src = path.resolve(__dirname,'../','src');

module.exports = {
    "stories": [
        "../src/**/*.stories.mdx",
        "../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "addons": [
        '@storybook/addon-docs',
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        '@storybook/addon-jest',
        '@storybook/addon-knobs',
        '@storybook/addon-viewport',
        '@storybook/addon-actions'
    ],
    webpack: async config => {
        const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
        if (fileLoaderRule) fileLoaderRule.exclude = pathToInlineSvg;

        config.module.rules.push({
            test: /\.svg$/,
            exclude: [/node_modules/, /\.spec.tsx?$/, /__snapshots__/, /__tests__/, /dist/],
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true
                    }
                }
            ]
        });
        return config;
    }
}
