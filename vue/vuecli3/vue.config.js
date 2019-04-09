const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    // config.resolve.alias.set('@', resolve('src'));
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .test(/\.(svg)(\?.*)?$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({ symbolId: 'icon-[name]' });
  },

  devServer: {
    port: 8133,
    proxy: {
      '/api': {
        target: 'http://10.128.39.169:7001',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true
      }
    }
  },

  lintOnSave: true
};
