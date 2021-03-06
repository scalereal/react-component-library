const path = require('path')
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-docs',
    '@storybook/addon-links',
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    '@storybook/addon-jest',
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
  ],

}