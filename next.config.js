// next.config.js
const withLess = require('@zeit/next-less');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer')

if (typeof require !== 'undefined') {
    require.extensions['.less'] = () => {}
}


module.exports =   withLess({
    lessLoaderOptions: {
        javascriptEnabled: true,
        cssModules: true,
    },
    webpack(config, options) {
        const plugins = [
            // new WebpackBundleAnalyzer.BundleAnalyzerPlugin()
        ]
        config.plugins.push(...plugins)
        return config
    }
})
  
// module.exports = withLess({
//     lessLoaderOptions: {
//         javascriptEnabled: true
//     },
//     webpack(config, options) {
//         config.module.rules.push({
//             test: /\.less$/,
//             use: [
//                 {
//                     loader: 'style-loader',
//                 },
//                 {
//                     loader: 'typings-for-css-modules-loader',
//                     options: {
//                         modules: true,
//                         namedExport: true,
//                         camelCase:true,
//                     }
//                 },
//                 {
//                     loader: 'postcss-loader'
//                 },
//                 {
//                     loader: 'style-loader',
//                 },
//             ]
//         })
//         config.module.rules.push({
//             test: /\.tsx?$/,
//             use: getTsLoaderRule(),
//             exclude: /node_modules/
//           })
          
//         config.plugins.push(
//             new webpack.WatchIgnorePlugin([
//                 /css\.d\.ts$/
//               ]),
//         )
//         return config
//     }
// });


