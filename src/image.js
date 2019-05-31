function Image (){
  // 引入图片路径
  const test = require('./test.jpg')
  const root = document.getElementById('root')
  // 创建图片标签
  const Image = new Image()
  // 给图片标签赋值
  Image.src=test
  root.append(Image)
}

export default Image