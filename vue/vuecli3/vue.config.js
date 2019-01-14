const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'));
  },

  devServer: {
    port: 5555,
    proxy: {
      '/api': {
        target: 'http://10.128.39.169:7001',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true
      }
    }
  },

  lintOnSave: undefined
};
