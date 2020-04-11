// next.config.js
const withCSS = require('@zeit/next-css')


module.exports = withCSS({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ]
        })
        return config
    },
})

