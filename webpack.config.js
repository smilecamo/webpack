// 路径插件
const path = require('path')

module.exports={
  // 打包环境
  // production 压缩代码
  // development 不压缩代码
  mode:"production",
  // 文件入口(打包哪个文件)
  entry:'./src/index.js',
  // 打包后,打包文件放在哪里
  output:{
    // 打包后得文件名
    filename:'index.js',
    // 打包后得路径 
    // path.resolve()
    // __dirname代表当前文件所在目录
    path:path.resolve(__dirname,'dist')
  },
  // 如果webpack默认规则不能打包,就会使用这里得规则
  module:{
    // 规则
    rules:[
      {
        // 以什么后缀结尾
        test:/\.(png|jpg|gif)$/,
        // 使用什么loader
        use:[
          {
            // loader 得名称
            loader: 'file-loader',
            // 设置
            options: {}
          }
        ]
      }
    ]
  }
}