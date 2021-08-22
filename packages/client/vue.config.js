module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        ws: true,
        changeOrigin: true,
        target: 'http://localhost:3000',
      },
    },
    progress: false,
  },
}
