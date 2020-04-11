// next.config.js
const withLess = require('@zeit/next-less')

if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {}
}
module.exports = withLess({
    cssModules: true, // 开启css modules
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
    webpack(config) {
        const lessRule = {
            test: /\.less$/,
            use: [
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    }
                },
            ]
        }

        config.module.rules.push(lessRule)
        return config
    },
})

