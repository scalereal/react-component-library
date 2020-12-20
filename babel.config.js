// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function (api) {
    const presets = [
            '@babel/env',
            '@babel/react',
            '@babel/typescript',
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        plugins = [
            [
                'babel-plugin-styled-components',
                {
                    pure: true,
                    displayName: true,
                    minify: true,
                    transpileTemplateLiterals: true
                }
            ],
            'inline-react-svg',
            'polished'
        ],
        ignore = ['node_modules'];
    return { presets, plugins, ignore };
};
