// next.config.js
const withLess = require('@zeit/next-less');

if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {}
}


module.exports = withLess({
    lessLoaderOptions: {
        javascriptEnabled: true
    },
    webpack(config, options) {
        config.module.rules.push({
            test: /\.less$/,
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
                {
                    loader: 'style-loader',
                },
            ]
        })
        return config
    }
});


