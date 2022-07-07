const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    https: false,
    port: 9999,
    host: 'localhost',
    proxy: {
      [process.env.APP_VUE_BASE_API]: {
        target: process.env.VUE_APP_BASE_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.APP_VUE_BASE_API]: ''
        }
      }
    }
  }
})
