module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'network': '@/network',
        'store': '@/store',
        'views': '@/views',
        'assets': '@/assets',
        'common': '@/common'
      }
    }
  },
  devServer: {
    disableHostCheck: false,
    host: "192.168.1.5",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null
}
}