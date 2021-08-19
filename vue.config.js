const path = require('path');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    /** Enviroment setting
     * process.env.NODE_ENV==='production'  
     * process.env.NODE_ENV==='development'
     * baseUrl: process.env.NODE_ENV==='production'?"prod_url":'',
     */

    publicPath: "./",
    outputDir: "dist",
    lintOnSave: true,
    productionSourceMap: false,
    chainWebpack: config => {
      config
          .plugin('webpack-bundle-analyzer')
          .use(BundleAnalyzerPlugin)
      config.plugin('compression-webpack-plugin')
          .use('compression-webpack-plugin', [{
            filename: '[path][base].gz',
            test: /\.(js|css|woff|ttf|eot|woff2)$/,
            threshold: 10240
          }])
    },
    configureWebpack: {
        resolve: {
            alias: {
              '@': path.resolve(__dirname, './src'),
            },
          },
      externals: {
        'echarts': 'echarts',
      }
    }, 
    devServer: {
        open: true,
        https: false,
        port: 8989,
        hotOnly: false,
        host: '0.0.0.0',
    }, 

    pluginOptions: {},
};