module.exports = {
    // 选项...
    devServer: {
        proxy: {
            '/api': {
              target: 'https://api.thecatapi.com',
              ws: true,
              changeOrigin: true,
              pathRewrite: { '^/api': '' }
            },
        }
     }
  }