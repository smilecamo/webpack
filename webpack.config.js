// 路径插件
const path = require('path')
const webpack = require('webpack')
// html 文件生成 打包结束后生成html,并把生成的js文件引入进来
var HtmlWebpackPlugin = require('html-webpack-plugin');
// 删除工具函数
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports={
  // 打包环境
  // production 压缩代码
  // development 不压缩代码
  mode:"development",
  // 测试环境错误提示 development  source-map
  devtool: 'cheap-module-eval-source-map', // development下最佳配置
  // 正式环境代码提示 production
  // devtool: 'cheap-module-source-map', // production下最佳配置
  /**
   * source-map 生成.map文件
   * inline 把打包生成的文件放入文件内 (合并生成的文件)
   * cheap 之提示业务逻辑中的错误,提示多少行出错,不提示多少列
   * module 也提示loader中的错误
   * eval 通过eval方式提示错误
   */
  // 文件入口(打包哪个文件)
  entry:{
    // key: 打包后的输出文件名
    main: './src/index.js'
  },
  // 打包后,打包文件放在哪里
  output:{
    // 配置打包后js的引入前缀网站,多用于cdn加速
    // publicPath: 'https://cdn.example.com',
    // 打包后得文件名 [name]:使用入口文件entry定义的key值
    filename:'[name]-[hash].js',
    // 打包后得路径 
    // path.resolve()
    // __dirname代表当前文件所在目录
    path:path.resolve(__dirname,'dist')
  },
  devServer:{
    // 路径
    contentBase: path.join(__dirname, 'dist'),
    // 打开浏览器
    open: true,
    compress: true,
    // 端口
    port: 9000,
    // 跨域代理
    proxy: {
      '/api': 'http://localhost:3000'
    },
    // 开启热更新
    hot: true,
    hotOnly: true
  },
  // 工具
  plugins: [
    // 打包前删除
    new CleanWebpackPlugin(),
    // 打包后生成
    new HtmlWebpackPlugin({
      // 使用模板
      template: 'src/index.html',
      // title:' demo',
      // meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
    }),
    // 开启热更新
    new webpack.HotModuleReplacementPlugin()
],
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
        //打包字体
        test:/\.(eot|ttf|svg|woff|woff2)$/,
        // 使用什么loader
        use:[
          // file-loader的基本使用
          {
            loader: 'file-loader',
            // 输出到什么文件夹下
            options:{
              outputPath: 'font/',
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
              // modules: true
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