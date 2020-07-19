const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  productionSourceMap: false,

  configureWebpack: {
    devtool: 'eval-source-map'
  },

  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        data: `@import "@scss/global.scss";`
      }
    }
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.resolve.alias
      .set('@', resolve('.'))
      .set('@src', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@fonts', resolve('src/assets/fonts'))
      .set('@images', resolve('src/assets/images'))
      .set('@scss', resolve('src/assets/scss'))
      .set('@components', resolve('src/components'))
      .set('@directives', resolve('src/directives'))
      .set('@layouts', resolve('src/layouts'))
      .set('@mixins', resolve('src/mixins'))
      .set('@models', resolve('src/models'))
      .set('@prototypes', resolve('src/prototypes'))
      .set('@router', resolve('src/router'))
      .set('@services', resolve('src/services'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@views', resolve('src/views'))
  }
}