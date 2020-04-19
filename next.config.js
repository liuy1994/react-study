// next.config.js
const withCss = require('@zeit/next-css')
if (typeof require !== 'undefined') {
    require.extensions['.css'] = () => {}
}

module.exports = withCss({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.css$/,
            include: [
                '/node_modules/antd/dist/'
            ],
            use: [
                {
                    loader: 'style-loader',
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    }
                },
            ]
        })
        return config
    }
});


