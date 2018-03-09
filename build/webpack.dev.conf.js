'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const express = require('express')
const app = express()//请求server
var appData = require('../db.json')//加载本地数据文件
var getNewsList = appData.getNewsList//获取对应的游记攻略的本地数据
var login = appData.login//获取对应的登录信息的本地数据
var getPrice = appData.getPrice//获取对应的价钱的本地数据
var createOrder = appData.createOrder//获取对应的生成订单的本地数据
var getOrderList = appData.getOrderList//获取对应的获取订单的本地数据
var apiRoutes = express.Router()
app.use('/api', apiRoutes)//通过路由请求数据

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/getNewsList', (req, res) => {
        res.json({
          errno: 0,
          data: getNewsList
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      });
      app.get('/api/login', (req, res) => {
        res.json({
          errno: 0,
          data: login
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      });
      app.post('/api/getPrice', (req, res) => {
        res.json({
          errno: 0,
          data: getPrice
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      });
      app.post('/api/createOrder', (req, res) => {
        res.json({
          errno: 0,
          data: createOrder
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      });
      app.post('/api/getOrderList', (req, res) => {
        res.json({
          errno: 0,
          data: getOrderList
        })//接口返回json数据，上面配置的数据seller就赋值给data请求后调用
      })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
