module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/api': {
              target: 'https://dog.ceo/api',
              ws: true,
              changeOrigin: true,
              pathRewrite: { '^/api': '' }
            },
        }
     }
  }