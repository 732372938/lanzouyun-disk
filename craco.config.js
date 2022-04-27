const path = require('path')

module.exports = {
  webpack: {
    configure: (config, {env, paths}) => {
      console.log('env:', env)
      // 自定义入口
      paths.appIndexJs = path.join(paths.appSrc, 'renderer', 'index.tsx')
      config.entry = paths.appIndexJs

      // 修改打包类型
      config.target = 'electron-renderer'

      return config
    },
  },
}
