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
          // file-loader的基本使用
          // {
          //   loader: 'file-loader',
          //   // 设置
          //   options: {
          //     // name设置打包后的文件名[name]使用原始的文件名[hash]使用hash值[ext]使用原始的文件名
          //     name:'[name]_[hash].[ext]',
          //     // 文件输出路径
          //     outputPath:'images/'
          //   }
          // },
          // url-loader
          {
            loader: 'url-loader',
            options:{
              name:'[name]_[hash].[ext]',
              outputPath:'images/',
              // 文件大小单位B,如果小于limit设置,则打包成base64,压缩到js中,大于的话打包成原始文件
              limit: 2048
            }
          },
        ]
      },
      {
        // 打包css文件
        test:/\.css$/,
        // 使用styles-loader 将样式打包入文件,css-loader 打包css文件
        // 执行顺序,从下往上从右到左
        use:['style-loader','css-loader']
      },
      {
        // 打包css文件
        test: /\.(scss|sass)$/,
        // 执行顺序,从下往上从右到左
        use: [
          'style-loader', 
          // 打包css
          {
            loader:'css-loader',
            options:{
              // 保证在scss文件中引用的sass文件,也按照正常的顺序打包
              importLoaders:2,
              // 启用css模块化
              modules: true
            }
          },
          // sass-loader 打包scss文件
          'sass-loader',
          // postcss-loader 自动增加厂商前缀,配置在根目录下的postcss.confing.js中
          'postcss-loader']
      }
    ]
  }
}