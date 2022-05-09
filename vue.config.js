const { defineConfig } = require('@vue/cli-service')
const tsImportPluginFactory = require('ts-import-plugin')
const { merge } = require('webpack-merge')

module.exports = defineConfig({
  transpileDependencies: true,
  parallel: false,
  chainWebpack: (config) => {
    config.module
      .rule('ts')
      .use('ts-loader')
      .tap((options) => {
        options = merge(options, {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              tsImportPluginFactory({
                libraryName: 'vant',
                libraryDirectory: 'es',
                style: true
              })
            ]
          }),
          compilerOptions: {
            module: 'es2015'
          }
        })
        return options
      })
      .end()
  }
})
