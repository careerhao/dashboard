const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    /** Enviroment setting
     * process.env.NODE_ENV==='production'  
     * process.env.NODE_ENV==='development'
     * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
     */

    publicPath: "./",
    outputDir: "dist",
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {
      config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
    },
    configureWebpack: {
        resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
    }, 
    devServer: {
        open: true,
        https: false,
        port: 8989,
        hotOnly: false,
        public: '0.0.0.0:8989',
    }, 

    pluginOptions: {}
};