const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   publicPath: process.env.NODE_ENV === 'production'
  ? '/docs/1.0/'  // This is whatever your path from the root is
  : '/',
   chainWebpack: config => {
        config.module.rules.delete('eslint');
    }
  
})
