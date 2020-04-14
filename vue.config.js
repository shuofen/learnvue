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
  }
}